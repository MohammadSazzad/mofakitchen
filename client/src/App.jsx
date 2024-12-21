import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [input, setInput] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error('Failed to get recipe');

      const data = await response.json();
      setRecipe(data.recipe);
    } catch (error) {
      setError('Failed to get recipe. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hungry? Find Your recipe here</h1>
          <p className="text-gray-600">Get your personalized recipe with Mofa's Kitchen</p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Input Form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter type of recipe (e.g., sweet, spicy, vegetarian)"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Getting Recipe...
                  </>
                ) : (
                  'Get Recipe'
                )}
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}

          {/* Recipe Display */}
          {recipe && (
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Recipe</h2>
              <div className="prose prose-blue max-w-none">
                <pre className="whitespace-pre-wrap text-gray-700 font-normal">{recipe}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}