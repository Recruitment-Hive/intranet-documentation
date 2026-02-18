import './App.css'
import { ContentsNavBar } from './contents-nav-bar'
import type { contentsNavBarLink } from './contents-nav-bar'
import { useState, useEffect } from 'react';
// PPP2 docs
import ppp2_1 from './assets/ppp2-doc1.png'
import ppp2_2 from './assets/ppp2-doc2.png'
import ppp2_3 from './assets/ppp2-doc3.png'
import ppp2_4 from './assets/ppp2-doc4.png'
import ppp2_5 from './assets/ppp2-doc5.png'
import ppp2_6 from './assets/ppp2-doc6.png'

function App() {
  let link1: contentsNavBarLink = { title: 'Overview', target: '#overview', children: [] }
  let link2: contentsNavBarLink = { title: 'Tools', target: '#tools', children: [{ title: 'PPP2', target: '#tools-ppp2', children: [] }, { title: 'Rate Calculator', target: '#tools-rate-calculator', children: [] }] }
  let links = [link1, link2];

  const getFlatIds = (links: contentsNavBarLink[]): string[] => {
    return links.reduce((acc: string[], link) => {
      // Remove the '#' from the target for getElementById
      const id = link.target.startsWith('#') ? link.target.slice(1) : link.target;
      acc.push(id);
      if (link.children.length > 0) {
        acc.push(...getFlatIds(link.children));
      }
      return acc;
    }, []);
  };

  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const ids = getFlatIds(links);

    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        // Find the entry that is currently intersecting the most
        const visibleEntry = entries.find(entry => entry.isIntersecting);

        if (visibleEntry) {
          console.log(visibleEntry.target.id);
          setActiveId(`#${visibleEntry.target.id}`);
        }
      },
      {
        root: document.querySelector("contents"),
        rootMargin: "-10% 0% -90% 0%",
        threshold: 0,
      }
    );

    ids.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id='container'>
      <ContentsNavBar links={links} activeHash={activeId} />
      <div id='contents'>
        <h1 id='overview'>Overview</h1>
        <p>The intranet is the hub for all internal Recruitment Hive tools.</p>
        <h1 id='tools'>Tools</h1>
        <p>
          Who should we please?
          Who's to believe?
          Who should we change for?
          Who could we be?</p>
        <h2 id='tools-ppp2'>PPP2 JD Generator</h2>
        <p>This tool is for generating Job Descriptions for People Panel Phase 2 roles.
          The tool is located here,
        </p>
        <img src={ppp2_1} />
        <p>Or <a href='https://recruitmenthivecloud.sharepoint.com/sites/RecruitmentHiveIntranet/SiteAssets/Intranet%20Navigation/dist/index.aspx#/tools/ppp2-job-generator'>here</a>.</p>
        <h3>Usage</h3>
        <p>
          Drag the documents associated with the role into the box. Multiple documents can be uploaded. Only .docx and .pdf are accepted.
        </p>
        <img src={ppp2_2} />
        <p>Any uploaded documents will be listed below the box. </p>
        <img src={ppp2_3} />
        <p>When the relevant documents are uploaded, enter the RFQ ID. It should automatically set your name, however if not you will have to select your name from the dropdown menu.</p>
        <img src={ppp2_4} />
        <p>Once at least one document has been uploaded, the RFQ ID is set and a recruiter is selected, the Generate JD button will appear. Click this to generate the JD. It will take around ~10 seconds.</p>
        <img src={ppp2_5} />
        <p>You can remove uploaded files by clicking on the red 'X'.</p>
        <img src={ppp2_6} />

        <h2 id='tools-rate-calculator'>Rate Calculator</h2>
        Change for its own sake
        Uniformity gave me a belly ache
        I want a mutiny
        My mind is finally awake
        Who could we be given equal opportunity?
        What could we see given equal chance to actually
      </div>
    </div>
  )
}

export default App
