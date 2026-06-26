<button
  onClick={() => setLanguage('es')}
  className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${language === 'es' ? 'bg-[#1a2b4a] text-white' : 'text-gray-500 hover:text-[#1a2b4a]'}`}
>
  ES
</button>
<button
  onClick={() => setLanguage('en')}
  className={`px-3 py-1 rounded-md text-sm font-semibold transition-colors ${language === 'en' ? 'bg-[#1a2b4a] text-white' : 'text-gray-500 hover:text-[#1a2b4a]'}`}
>
  EN
</button>
