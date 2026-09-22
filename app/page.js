const features=[
["✍️","Write Better","Build outlines, characters, chapters, pacing and cliffhangers with guided author tools."],
["📚","Publish","Prepare your manuscript, submit your story and track its publishing journey."],
["🔎","Get Discovered","Create an author profile, showcase books and reach readers looking for their next story."],
["💰","Earn","Build toward transparent book earnings, promotions and simple withdrawal options."],
["🤖","Author AI","Get help with plot consistency, chapter hooks, story structure and marketing without losing your voice."],
["🚀","Author Launchpad","A step-by-step path for new writers from first idea to finished book and launch."]
];

export default function Home(){
 return <main>
  <nav className="nav"><div className="brand"><span className="mark">G</span><span>GoRovik</span></div><div className="links"><a href="#features">Features</a><a href="#launchpad">Launchpad</a><a href="#waitlist">Join</a></div><button className="ghost">Sign in</button></nav>
  <section className="hero">
   <div className="pill">🌍 Built for authors everywhere</div>
   <h1>Your story deserves<br/><span>a bigger world.</span></h1>
   <p className="lead">GoRovik is building the home where authors can <b>write, publish, grow, get discovered and earn.</b></p>
   <div className="actions"><a className="primary" href="#waitlist">Join the early author community →</a><a className="secondary" href="#features">Explore the vision</a></div>
   <div className="stats"><div><b>01</b><span>Write</span></div><div><b>02</b><span>Publish</span></div><div><b>03</b><span>Discover</span></div><div><b>04</b><span>Grow</span></div></div>
  </section>
  <section id="features" className="section"><div className="eyebrow">THE GO ROVIK ECOSYSTEM</div><h2>Everything an author needs.<br/><span>In one place.</span></h2><div className="grid">{features.map(([i,t,d])=><article className="card" key={t}><div className="icon">{i}</div><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section id="launchpad" className="launch"><div><div className="eyebrow">AUTHOR LAUNCHPAD</div><h2>From “I have an idea”<br/>to “people are reading me.”</h2><p>New to writing? GoRovik will guide you through the journey instead of leaving you to figure everything out alone.</p></div><div className="steps"><div><b>01</b> Story idea</div><div><b>02</b> Outline & characters</div><div><b>03</b> Write & improve</div><div><b>04</b> Prepare for publishing</div><div><b>05</b> Launch & find readers</div></div></section>
  <section id="waitlist" className="wait"><div className="eyebrow">EARLY COMMUNITY</div><h2>Help us build GoRovik.</h2><p>We are listening to real authors before we lock the product. Tell us what would make writing and publishing easier for you.</p><div className="question"><span>💬</span><div><b>What is the #1 feature you wish every author platform had?</b><small>More author feedback = a better GoRovik.</small></div></div><button className="primary wide">Join the GoRovik waitlist →</button></section>
  <footer><div className="brand"><span className="mark">G</span><span>GoRovik</span></div><span>Built for the next generation of authors.</span></footer>
 </main>
}