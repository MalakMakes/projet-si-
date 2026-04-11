export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Mon Projet SI</h1>
        <p className="text-gray-600">Bienvenue sur mon application connectée à Supabase</p>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Carte Table A */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="font-bold text-xl mb-2 text-indigo-500">Profils (Table A)</h2>
          <p className="text-sm text-gray-500">Gestion des utilisateurs et comptes.</p>
        </div>

        {/* Carte Table B */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="font-bold text-xl mb-2 text-green-500">Ressources (Table B)</h2>
          <p className="text-sm text-gray-500">Le catalogue de mon application.</p>
        </div>

        {/* Carte Table C */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="font-bold text-xl mb-2 text-orange-500">Interactions (Table C)</h2>
          <p className="text-sm text-gray-500">Les actions et fichiers joints (PDF/Images).</p>
        </div>
      </main>
    </div>
  );
}