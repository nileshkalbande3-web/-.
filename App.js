Export default function VanrakshakPortal() { const subjects = [ { title: 'सामान्य ज्ञान', icon: '🌍', topics: ['महाराष्ट्र GK', 'भारत GK', 'पर्यावरण', 'चालू घडामोडी'], }, { title: 'गणित', icon: '📘', topics: ['अंकगणित', 'टक्केवारी', 'नफा-तोटा', 'वेग व वेळ'], }, { title: 'बुद्धिमत्ता', icon: '🧠', topics: ['Series', 'Coding-Decoding', 'Analogy', 'Blood Relation'], }, { title: 'मराठी', icon: '✍️', topics: ['व्याकरण', 'समानार्थी शब्द', 'विरुद्धार्थी', 'वाक्प्रचार'], }, { title: 'English', icon: '📖', topics: ['Grammar', 'Vocabulary', 'Tenses', 'Comprehension'], }, ];

const dailyTasks = [ '20 GK MCQs Solve करा', '1 तास गणित Practice', 'मराठी व्याकरण Revision', 'Current Affairs वाचा', ];

return ( <div className="min-h-screen bg-gradient-to-b from-green-950 via-green-900 to-black text-white p-6"> <div className="max-w-7xl mx-auto"> <header className="text-center py-10"> <h1 className="text-5xl font-bold mb-4">🌲 Vanrakshak Study Portal</h1> <p className="text-green-200 text-lg"> महाराष्ट्र वनरक्षक परीक्षेसाठी Complete Preparation Platform </p> </header>

<section className="grid md:grid-cols-3 gap-6 mb-10">
      <div className="bg-white/10 backdrop-blur rounded-3xl p-6 shadow-xl border border-green-700">
        <h2 className="text-2xl font-semibold mb-3">📅 Daily Study</h2>
        <p className="text-green-100">
          रोज 3 तास smart study करून strong preparation करा.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-3xl p-6 shadow-xl border border-green-700">
        <h2 className="text-2xl font-semibold mb-3">🎯 Target</h2>
        <p className="text-green-100">
          Vanrakshak + Forest Related Exams Full Focus.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-3xl p-6 shadow-xl border border-green-700">
        <h2 className="text-2xl font-semibold mb-3">🔥 Motivation</h2>
        <p className="text-green-100">
          Consistency > Motivation. रोज थोडा अभ्यास मोठा result देतो.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">📚 Subjects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="bg-white/10 border border-green-700 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-xl"
          >
            <div className="text-5xl mb-4">{subject.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{subject.title}</h3>

            <ul className="space-y-2 text-green-100">
              {subject.topics.map((topic, i) => (
                <li key={i}>• {topic}</li>
              ))}
            </ul>

            <button className="mt-6 bg-green-500 hover:bg-green-400 text-black font-semibold px-5 py-2 rounded-2xl w-full">
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </section>

    <section className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="bg-white/10 border border-green-700 rounded-3xl p-6 shadow-xl">
        <h2 className="text-3xl font-bold mb-5">📝 Daily Tasks</h2>
        <ul className="space-y-3 text-lg text-green-100">
          {dailyTasks.map((task, index) => (
            <li key={index}>✅ {task}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white/10 border border-green-700 rounded-3xl p-6 shadow-xl">
        <h2 className="text-3xl font-bold mb-5">🏆 Exam Strategy</h2>
        <p className="text-green-100 leading-8 text-lg">
          आधी Basics strong करा. त्यानंतर MCQs solve करा.
          रोज Revision ठेवा आणि weak subjects वर extra focus करा.
        </p>
      </div>
    </section>

    <section className="bg-gradient-to-r from-green-500 to-lime-400 rounded-3xl p-8 text-black shadow-2xl text-center">
      <h2 className="text-4xl font-bold mb-4">🚀 Ready For Forest Exam?</h2>
      <p className="text-lg mb-6 font-medium">
        Start your Vanrakshak journey today and stay consistent.
      </p>

      <button className="bg-black text-white px-8 py-3 rounded-2xl text-lg font-semibold hover:scale-105 transition">
        Start Preparation
      </button>
    </section>
  </div>
</div>

); }
Web vr tak aani direct link de mla
