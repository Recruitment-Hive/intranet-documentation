import './App.css'
import { ContentsNavBar } from './contents-nav-bar'
import type { contentsNavBarLink } from './contents-nav-bar'
import { useRef, useEffect } from 'react';
// JD Gen Docs
import ppp2_1 from './assets/ppp2-doc1.png'
import ppp2_2 from './assets/ppp2-doc2.png'
import ppp2_3 from './assets/ppp2-doc3.png'
import ppp2_4 from './assets/ppp2-doc4.png'
import ppp2_5 from './assets/ppp2-doc5.png'
import ppp2_6 from './assets/ppp2-doc6.png'

// Job Uploader Docs
import jobtool1 from './assets/jobtool-doc1.png'
import jobtool2 from './assets/jobtool-doc2.png'
import jobtool3 from './assets/jobtool-doc3.png'
import jobtool4 from './assets/jobtool-doc4.png'
import jobtool5 from './assets/jobtool-doc5.png'

import rate_calc_1 from './assets/rate-calc-doc1.png'

function App() {
  let link1: contentsNavBarLink = { title: 'Overview', target: '#overview', children: [] }
  let link2: contentsNavBarLink = { title: 'Tools', target: '#tools', children: [{ title: 'Combined JD Generator', target: '#tools-jd-generator', children: [] }, { title: 'Job Uploader', target: '#tools-job-uploader', children: [] }, { title: 'Rate Calculator', target: '#tools-rate-calculator', children: [] }] }
  let links = [link1, link2];
  const section = window.location.hash.slice(1).toLowerCase();
  //Sections
  const OverviewRef = useRef<HTMLHeadingElement>(null);
  const ToolsRef = useRef<HTMLHeadingElement>(null);
  const JDGenRef = useRef<HTMLHeadingElement>(null);
  const RateCalcRef = useRef<HTMLHeadingElement>(null);
  const JobUploader = useRef<HTMLHeadingElement>(null);

  const goToOverview = () => window.scrollTo({
    top: OverviewRef.current?.offsetTop,
    behavior: "smooth"
  })
  const goToTools = () => window.scrollTo({
    top: ToolsRef.current?.offsetTop,
    behavior: "smooth"
  })
  const goToJDGen = () => window.scrollTo({
    top: JDGenRef.current?.offsetTop,
    behavior: "smooth"
  })
  const goToRateCalc = () => window.scrollTo({
    top: RateCalcRef.current?.offsetTop,
    behavior: "smooth"
  })
  const goToJobUploader = () => window.scrollTo({
    top: JobUploader.current?.offsetTop,
    behavior: "smooth"
  })

  useEffect(() => {
    const scrollFns: Record<string, () => void> = {
      'overview': goToOverview,
      'tools': goToTools,
      'tools-jd-generator': goToJDGen,
      'tools-rate-calculator': goToRateCalc,
      'tools-job-uploader': goToJobUploader,
    };
    const fn = scrollFns[section];
    if (fn) {
      const timer = setTimeout(fn, 100);
      return () => clearTimeout(timer);
    }
  }, [section]);

  // const getFlatIds = (links: contentsNavBarLink[]): string[] => {
  //   return links.reduce((acc: string[], link) => {
  //     // Remove the '#' from the target for getElementById
  //     const id = link.target.startsWith('#') ? link.target.slice(1) : link.target;
  //     acc.push(id);
  //     if (link.children.length > 0) {
  //       acc.push(...getFlatIds(link.children));
  //     }
  //     return acc;
  //   }, []);
  // };

  // const [activeId, setActiveId] = useState<string>('');

  // useEffect(() => {
  //   const ids = getFlatIds(links);

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       console.log(entries);
  //       // Find the entry that is currently intersecting the most
  //       const visibleEntry = entries.find(entry => entry.isIntersecting);

  //       if (visibleEntry) {
  //         console.log(visibleEntry.target.id);
  //         setActiveId(`#${visibleEntry.target.id}`);
  //       }
  //     },
  //     {
  //       root: document.querySelector("contents"),
  //       rootMargin: "-10% 0% -90% 0%",
  //       threshold: 0,
  //     }
  //   );

  //   ids.forEach(id => {
  //     const element = document.getElementById(id);
  //     if (element) observer.observe(element);
  //   });

  //   return () => observer.disconnect();
  // }, []);
  //activeHash={activeId}
  return (
    <div id='container'>
      <ContentsNavBar links={links} />
      <div id='contents'>
        <h1 ref={OverviewRef} id='overview'>Overview</h1>
        <p>The intranet is the hub for all internal Recruitment Hive tools.</p>
        <h1 ref={ToolsRef} id='tools'>Tools</h1>

        <h2 ref={JDGenRef} id='tools-jd-generator'>Combined JD Generator</h2>
        <p>This tool is for generating Job Descriptions for People Panel Phase 2, Group 10 and Voak roles.
          The tool is located <a href='https://recruitmenthivecloud.sharepoint.com/sites/RecruitmentHiveIntranet/SiteAssets/Intranet%20Navigation/dist/index.aspx#/tools/ppp2-job-generator'>here</a>,
        </p>
        <img src={ppp2_1} />
        <h3>Usage</h3>
        <p>
          <b>1.</b> Drag the documents associated with the role into the box. Multiple documents can be uploaded. The document to upload depends on the job source. For PPP2 roles, upload the associated .docx and .pdf files. For Group 10 and Voak roles, upload the email the role came in.
        </p>
        <img src={ppp2_2} />
        <p><b>2.</b> Any uploaded documents will be listed below the box. </p>
        <img src={ppp2_3} />
        <p><b>3.</b> When the relevant documents are uploaded, enter the RFQ ID. The Recruiter field should automatically set to your name, however if not you will have to select your name from the dropdown menu.</p>
        <img src={ppp2_4} />
        <p><b>4.</b> Once at least one document has been uploaded, the RFQ ID is set and a recruiter is selected, the Generate JD button will appear. Click this to generate the JD.</p>
        <img src={ppp2_5} />
        <p>You can remove uploaded files by clicking on the red 'X'.</p>
        <img src={ppp2_6} />
        <h2 ref={JobUploader} id='tools-job-uploader'>Job Tool</h2>
        <p>This tool extracts information from Recruitment Hive Job Descriptions and uploads the information to Sharepoint and Recruit Wizard.
        </p>
        <p>You can find the Job Tool <a href='https://recruitmenthivecloud.sharepoint.com/sites/RecruitmentHiveIntranet/SiteAssets/Intranet%20Navigation/dist/index.aspx#/tools/job-tool'>here</a>.</p>
        <img src={jobtool1} />
        <h3>Usage</h3>
        <p><b>1.</b> Drag a completed Job Description into the tool.</p>
        <img src={jobtool2} />
        <p><b>2.</b> The tool will extract information from the Job Description and display it. From here you can upload the Job Description to Sharepoint and Recruit Wizard.</p>
        <img src={jobtool5} />
        <p><b>3a.</b> Clicking "Create File Structure" will bring you to this page. From here you can edit the job information, as well as add additional files and the email the role came in. The new folders that will be created are displayed at the bottom. Clicking create file structure will create the new folders and insert the Job Description along with the additional files into the folder. </p>
        <img src={jobtool3} />
        <p>If the upload is successful you can view the file in Sharepoint or click back to return to the screen at step 2.</p>
        <img src={jobtool4} />
        <p><b>3b.</b>"Upload to Recruit Wizard" is currentley in development. </p>

        <h2 ref={RateCalcRef} id='tools-rate-calculator'>Rate Calculator</h2>

        <p>You can find the Job Tool <a href='https://recruitmenthivecloud.sharepoint.com/sites/RecruitmentHiveIntranet/SiteAssets/Intranet%20Navigation/dist/index.aspx#/tools/rate-calculator'>here</a>.</p>

        <img src={rate_calc_1} />
      </div>
    </div>
  )
}

export default App
