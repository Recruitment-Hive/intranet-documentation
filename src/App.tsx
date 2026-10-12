import './App.css'
import { ContentsNavBar } from './contents-nav-bar'
import type { contentsNavBarLink } from './contents-nav-bar'
import { useRef, useEffect, useState } from 'react';
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
import rate_calc_2 from './assets/rate-calc-doc2.png'
import rate_calc_3 from './assets/rate-calc-doc3.png'
import rate_calc_4 from './assets/rate-calc-doc4.png'
import rate_calc_5 from './assets/rate-calc-doc5.png'
import rate_calc_6 from './assets/rate-calc-doc6.png'
import rate_calc_7 from './assets/rate-calc-doc7.png'
import rate_calc_8 from './assets/rate-calc-doc8.png'
import rate_calc_9 from './assets/rate-calc-doc9.png'
import rate_calc_10 from './assets/rate-calc-doc10.png'
import rate_calc_11 from './assets/rate-calc-doc11.png'
import rate_calc_12 from './assets/rate-calc-doc12.png'
import rate_calc_13 from './assets/rate-calc-doc13.png'
import rate_calc_14 from './assets/rate-calc-doc14.png'
import rate_calc_15 from './assets/rate-calc-doc15.png'
import rate_calc_16 from './assets/rate-calc-doc16.png'

import recruitwizard1 from './assets/recruitwizard-doc1.png'
import recruitwizard2 from './assets/recruitwizard-doc2.png'
import recruitwizard3 from './assets/recruitwizard-doc3.png'


function App() {
  let link1: contentsNavBarLink = { title: 'Overview', target: '#overview', children: [] }
  let link2: contentsNavBarLink = { title: 'Tools', target: '#tools', children: [{ title: 'Combined JD Generator', target: '#tools-jd-generator', children: [] }, { title: 'Job Tool', target: '#tools-job-uploader', children: [{ title: 'Create File Structure', target: '#tools-job-tool-create-file-structure', children: [] }, { title: 'Upload to Recruit Wizard', target: '#tools-job-tool-upload-recruit-wizard', children: [] }] }, { title: 'Rate Calculator', target: '#tools-rate-calculator', children: [{ title: 'DMP2 Breakdown', target: '#tools-rate-calculator-dmp2', children: [] }, { title: 'PPP2 Breakdown', target: '#tools-rate-calculator-ppp2', children: [] }] }] }
  let links = [link1, link2];
  const section = window.location.hash.slice(1).toLowerCase();
  const [activeId, setActiveId] = useState<string>('');
  const isNavigating = useRef(false);
  const navTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleNavClick = (target: string) => {
    setActiveId(target);
    isNavigating.current = true;
    clearTimeout(navTimer.current);
    navTimer.current = setTimeout(() => { isNavigating.current = false; }, 800);
  };
  //Sections
  const OverviewRef = useRef<HTMLHeadingElement>(null);
  const ToolsRef = useRef<HTMLHeadingElement>(null);
  const JDGenRef = useRef<HTMLHeadingElement>(null);
  const RateCalcRef = useRef<HTMLHeadingElement>(null);
  const DMP2BreakdownRef = useRef<HTMLHeadingElement>(null);
  const PPP2BreakdownRef = useRef<HTMLHeadingElement>(null);
  const JobUploader = useRef<HTMLHeadingElement>(null);
  const CreateFileStructureRef = useRef<HTMLHeadingElement>(null);
  const UploadRecruitWizardRef = useRef<HTMLHeadingElement>(null);

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
  const goToDMP2Breakdown = () => window.scrollTo({
    top: DMP2BreakdownRef.current?.offsetTop,
    behavior: "smooth"
  })
  const goToPPP2Breakdown = () => window.scrollTo({
    top: PPP2BreakdownRef.current?.offsetTop,
    behavior: "smooth"
  })
  const goToJobUploader = () => window.scrollTo({
    top: JobUploader.current?.offsetTop,
    behavior: "smooth"
  })
  const goToCreateFileStructure = () => window.scrollTo({
    top: CreateFileStructureRef.current?.offsetTop,
    behavior: "smooth"
  })
  const goToRecruitWizardUploader = () => window.scrollTo({
    top: UploadRecruitWizardRef.current?.offsetTop,
    behavior: "smooth"
  })

  useEffect(() => {
    const sectionIds = [
      'overview', 'tools', 'tools-jd-generator', 'tools-job-uploader',
      'tools-job-tool-create-file-structure', 'tools-rate-calculator',
      'tools-rate-calculator-dmp2', 'tools-rate-calculator-ppp2', 'tools-job-tool-upload-recruit-wizard'
    ];
    const handleScroll = () => {
      if (isNavigating.current) return;
      const scrollY = window.scrollY + 80;
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = `#${id}`;
      }
      setActiveId(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollFns: Record<string, () => void> = {
      'overview': goToOverview,
      'tools': goToTools,
      'tools-jd-generator': goToJDGen,
      'tools-rate-calculator': goToRateCalc,
      'tools-rate-calculator-dmp2': goToDMP2Breakdown,
      'tools-rate-calculator-ppp2': goToPPP2Breakdown,
      'tools-job-uploader': goToJobUploader,
      'tools-job-tool-create-file-structure': goToCreateFileStructure,
      'tools-job-tool-upload-recruit-wizard': goToRecruitWizardUploader,
    };
    const fn = scrollFns[section];
    if (!fn) return;
    if (document.readyState === 'complete') {
      fn();
    } else {
      window.addEventListener('load', fn, { once: true });
      return () => window.removeEventListener('load', fn);
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
      <ContentsNavBar links={links} activeHash={activeId} onLinkClick={handleNavClick} />
      <div id='contents'>
        <h1 ref={OverviewRef} id='overview'>Overview</h1>
        <p>The intranet is the hub for all internal Recruitment Hive tools.</p>
        <h1 ref={ToolsRef} id='tools'>Tools</h1>

        <h2 ref={JDGenRef} id='tools-jd-generator'>Combined JD Generator</h2>
        <p>This tool is for generating Job Descriptions for People Panel Phase 2, Group 10 and Voak roles.
          The tool is located <a href='https://recruitmenthivecloud.sharepoint.com/sites/RecruitmentHiveIntranet/SiteAssets/Intranet%20Navigation/dist/index.aspx#/tools/ppp2-job-generator' target="_top">here</a>,
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
        <p>You can find the Job Tool <a href='https://recruitmenthivecloud.sharepoint.com/sites/RecruitmentHiveIntranet/SiteAssets/Intranet%20Navigation/dist/index.aspx#/tools/job-tool' target="_top">here</a>.</p>
        <img src={jobtool1} />
        <h3>Usage</h3>
        <p><b>1.</b> Drag a completed Job Description into the tool.</p>
        <img src={jobtool2} />
        <p><b>2.</b> The tool will extract information from the Job Description and display it. From here you can upload the Job Description to Sharepoint and Recruit Wizard.</p>
        <img src={jobtool5} />
        <h3 ref={CreateFileStructureRef} id='tools-job-tool-create-file-structure'>Create File Structure</h3>
        <p><b>3a.</b> Clicking "Create File Structure" will bring you to this page. From here you can edit the job information, as well as add additional files and the email the role came in. The new folders that will be created are displayed at the bottom. Clicking create file structure will create the new folders and insert the Job Description along with the additional files into the folder.</p>
        <img src={jobtool3} />
        <p>Note: Changing the fields will also change the file path, make sure to check these before you create.</p>
        <p>If the upload is successful you can view the file in Sharepoint or click back to return to the screen at step 2.</p>
        <img src={jobtool4} />
        <h3 ref={UploadRecruitWizardRef} id='tools-job-tool-upload-recruit-wizard'>Upload to Recruit Wizard</h3>
        <p><b>3b.</b> Clicking "Upload to Recruit Wizard" will bring you to the client selection page. Search for the client by name, the tool will attempt to auto-match the client from the Job Description. Once you've selected a client, search for the relevant contact. If the contact doesn't appear, click "Get all contacts" to load the full contact list for that client.</p>
        <img src={recruitwizard1} />
        <p>Note: The tool will auto-select a client and contact where it can find a match. Always verify these are correct before proceeding.</p>
        <p><b>4.</b> Click "Next" to proceed to the job details page. The tool will pre-fill the job information extracted from the Job Description. Review each field carefully and make any necessary edits before uploading.</p>
        <img src={recruitwizard2} />
        <p>You can also attach the original Outlook email (.msg or .eml) that the role came in on, this will be uploaded to the job in Recruit Wizard alongside the Job Description.</p>
        <p><b>5.</b> Click "Upload to Recruit Wizard" to create the job. Once successful, you will be taken to the confirmation screen where the Job Description and email (if attached) will be automatically uploaded to the job.</p>
        <img src={recruitwizard3} />
        <p>From here you can click "Open in Recruit Wizard" to view the newly created job, or click "Back to Job Tool" to return to the main screen.</p>

        <h2 ref={RateCalcRef} id='tools-rate-calculator'>Rate Calculator</h2>

        <p>You can find the Rate Calculator Tool <a href='https://recruitmenthivecloud.sharepoint.com/sites/RecruitmentHiveIntranet/SiteAssets/Intranet%20Navigation/dist/index.aspx#/tools/rate-calculator' target="_top">here</a>.</p>
        <img src={rate_calc_1} className="rate-calc-img" />
        <h3>Usage</h3>
        <p><b>1. </b>Select the type of rate breakdown you wish to create, either DMP2 or PPP2.</p>
        <img src={rate_calc_2} className="rate-calc-img" />
        <p><b>2. </b>Fill in the hourly rate (inc. super) and choose between a daily or hourly breakdown.</p>
        <p><b>Note: </b>When switching between daily and hourly, the rate will automatically be converted based on the number of hours.</p>
        <div className="rate-calc-comparison">
          <img src={rate_calc_3} />
          <div className="rate-calc-arrows">
            <div className="rate-calc-arrow">
              <span>Change to Daily</span>
              <div className="arrow-line">
                <div className="arrow-shaft" />
                <div className="arrow-head-right" />
              </div>
            </div>
            <div className="rate-calc-arrow">
              <div className="arrow-line">
                <div className="arrow-head-left" />
                <div className="arrow-shaft" />
              </div>
              <span>Change to Hourly</span>
            </div>
          </div>
          <img src={rate_calc_4} />
        </div>
        <p><b>3. </b>Select the Pay Frequency.</p>
        <p><b>Note: </b>When choosing a pay frequency with a fee, you can click the "Change" button to adjust the pay rate so it lands at your desired amount after the fee is applied.</p>
        <img src={rate_calc_6} className="rate-calc-img" />
        <p><b>4. </b>Select the State Payroll Tax.</p>
        <img src={rate_calc_7} className="rate-calc-img" />
        <p><b>Note: </b>For VIC and SA placements, you will need to fill an additional field</p>
        <p>Once steps 1–4 are complete, follow the section below for your selected breakdown type.</p>

        <h3 ref={DMP2BreakdownRef} id='tools-rate-calculator-dmp2'>DMP2 Breakdown</h3>
        <p><b>5. </b>Fill in the Fee Type. Full-Fee and Self-Find Fees will automatically be calculated.</p>
        <img src={rate_calc_8} className="rate-calc-img" />
        <p><b>5a. </b>To set a custom fee, select "Custom Fee" from the Fee Type dropdown.</p>
        <p><b>5b. </b>Choose whether you would like to set a flat dollar fee or a percentage fee based on the pay rate.</p>
        <p><b>5c. </b>Input the fee value.</p>
        <img src={rate_calc_9} className="rate-calc-img" />
        <p><b>Note: </b>The PTY Selfie button applies the self-find fee and removes LSL from the oncosts. If required, this should always be done as the final step.</p>
        <img src={rate_calc_10} className="rate-calc-img" />
        <p><b>6. </b>The tables below will automatically recalculate based on your selections. Click a breakdown to view and copy the table, or download an image to save it for later.</p>
        <p><b>Note: </b>You can hover over fields in the tables to see a brief description of the calculation logic or value.</p>
        <img src={rate_calc_11} className="rate-calc-img" />

        <h3 ref={PPP2BreakdownRef} id='tools-rate-calculator-ppp2'>PPP2 Breakdown</h3>
        <p><b>5. </b>Select the APS Level.</p>
        <img src={rate_calc_12} className="rate-calc-img" alt=" TODO:Add screenshot" />
        <p><b>6. </b>Select the Engagement Type.</p>
        <img src={rate_calc_13} className="rate-calc-img" alt=" TODO:Add screenshot" />
        <p><b>7. </b>Select the Clearance Cost.</p>
        <img src={rate_calc_14} className="rate-calc-img" alt=" TODO:Add screenshot" />
        <p><b>8. </b>Fill in the Fee Type. Referred and Non-Referred Fees will automatically be calculated.</p>
        <img src={rate_calc_15} className="rate-calc-img" alt=" TODO:Add screenshot" />
        <p><b>8a. </b>To set a custom fee, select "Custom Fee" from the Fee Type dropdown.</p>
        <p><b>8b. </b>Choose whether you would like to set a flat dollar fee or a percentage fee based on the pay rate.</p>
        <p><b>8c. </b>Input the fee value.</p>
        <img src={rate_calc_5} className="rate-calc-img" alt=" TODO:Add screenshot" />
        <p><b>9. </b>The tables below will automatically recalculate based on your selections. Click a breakdown to view and copy the table, or download an image to save it for later.</p>
        <p><b>Note: </b>You can hover over fields in the tables to see a brief description of the calculation logic or value.</p>
        <img src={rate_calc_16} className="rate-calc-img" alt=" TODO:Add screenshot" />

      </div>
    </div>
  )
}

export default App
