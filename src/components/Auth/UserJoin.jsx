import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { LogIn } from 'lucide-react';

export const UserJoin = ({ onJoinSuccess }) => {
    const [sessionCode, setSessionCode] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { loginAnonymous } = useAuth();

    const handleJoin = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError('Please enter your name');
            return;
        }
        if (!sessionCode.trim()) {
            setError('Please enter a session code');
            return;
        }

        setLoading(true);
        setError('');

        try {
            // Check if session exists
            const sessionRef = doc(db, 'sessions', sessionCode.toUpperCase());
            const sessionSnap = await getDoc(sessionRef);

            if (!sessionSnap.exists()) {
                setError('Session not found. Please check the code.');
                setLoading(false);
                return;
            }

            // Join as anonymous user
            await loginAnonymous(name, sessionCode.toUpperCase());
            onJoinSuccess(sessionCode.toUpperCase());
        } catch (err) {
            console.error('Join error:', err);
            setError('Failed to join session. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 p-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Dot Collector
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Join a feedback session
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleJoin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                placeholder="Enter your name"
                                disabled={loading}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Session Code
                            </label>
                            <input
                                type="text"
                                value={sessionCode}
                                onChange={(e) => setSessionCode(e.target.value.toUpperCase())}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none uppercase text-center text-2xl font-bold tracking-wider"
                                placeholder="ABCDEF"
                                maxLength={6}
                                disabled={loading}
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading || !name.trim() || !sessionCode.trim()}
                            className="w-full btn-primary flex items-center justify-center gap-2"
                        >
                            <LogIn size={20} />
                            {loading ? 'Joining...' : 'Join Session'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Session host? <a href="/admin" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Admin Login →</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
