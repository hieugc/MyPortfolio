const data={
en:{
  heroEyebrow:'Software Engineer · Ho Chi Minh City',
  heroTitle:'BUILDING<br><em>RELIABLE</em><br>SYSTEMS.',
  heroLead:'Backend-focused engineer building production software across enterprise workflows, APIs, databases, integrations and operational tooling.',
  explore:'Explore selected work ↓',available:'Open to software engineering opportunities',focus:'Backend / API / Data workflows',sideNote:'A portfolio focused on how systems are structured, shipped and maintained — not only on technology labels.',
  years:'Years Experience',projects:'Projects Completed',clients:'Client Sectors',development:'Development',
  navWork:'Work',navExperience:'Experience',navSkills:'Capabilities',export:'Export CV ▾',downloadPdf:'Download CV PDF',printPdf:'Print / Save as PDF',copyProfile:'Copy profile summary',
  workTitle:'Systems with real operational context',workIntro:'Each project highlights the problem, technical stack, ownership and delivery context.',
  experienceTitle:'Production experience',experienceDesc:'Software Engineer (.NET) · full-stack delivery for enterprise and government web systems.',educationSchool:'HCMC University of Technology',educationDesc:'Bachelor of Computer Science · GPA 7.0',
  skillsTitle:'What I work with',storyTitle:'Show decisions, not only screenshots.',storyDesc:'A professional engineering portfolio should explain what problem existed, how the system was structured, what you owned and how it reached production.',
  problem:'Problem',architecture:'Architecture',ownership:'Ownership',delivery:'Delivery',cvTitle:'Portfolio when exploring.<br>CV when scanning.',cvDesc:'The portfolio provides technical context, while the existing CV remains one click away for recruiters who need a conventional résumé.'
},
vi:{
  heroEyebrow:'Kỹ sư phần mềm · TP. Hồ Chí Minh',
  heroTitle:'XÂY DỰNG<br><em>HỆ THỐNG</em><br>ỔN ĐỊNH.',
  heroLead:'Kỹ sư thiên về backend, phát triển hệ thống production cho doanh nghiệp và cơ quan chính phủ, từ API, cơ sở dữ liệu đến tích hợp và vận hành.',
  explore:'Xem dự án ↓',available:'Sẵn sàng cho cơ hội Software Engineer',focus:'Backend / API / Luồng dữ liệu',sideNote:'Portfolio tập trung vào cách hệ thống được thiết kế, triển khai và bảo trì — không chỉ liệt kê công nghệ.',
  years:'Năm kinh nghiệm',projects:'Dự án hoàn thành',clients:'Lĩnh vực khách hàng',development:'Phát triển',
  navWork:'Dự án',navExperience:'Kinh nghiệm',navSkills:'Năng lực',export:'Xuất CV ▾',downloadPdf:'Tải CV PDF',printPdf:'In / Lưu PDF',copyProfile:'Sao chép giới thiệu',
  workTitle:'Hệ thống với bối cảnh vận hành thực tế',workIntro:'Mỗi dự án thể hiện bài toán, công nghệ, phạm vi phụ trách và bối cảnh triển khai.',
  experienceTitle:'Kinh nghiệm production',experienceDesc:'Software Engineer (.NET) · phát triển full-stack cho hệ thống doanh nghiệp và chính phủ.',educationSchool:'Đại học Bách Khoa TP Hồ Chí Minh',educationDesc:'Cử nhân Khoa học Máy tính · GPA 7.0',
  skillsTitle:'Năng lực kỹ thuật',storyTitle:'Thể hiện quyết định kỹ thuật, không chỉ screenshot.',storyDesc:'Portfolio kỹ thuật chuyên nghiệp cần giải thích bài toán, kiến trúc, phạm vi phụ trách và cách hệ thống được đưa lên production.',
  problem:'Bài toán',architecture:'Kiến trúc',ownership:'Phụ trách',delivery:'Triển khai',cvTitle:'Portfolio để khám phá.<br>CV để đọc nhanh.',cvDesc:'Portfolio cung cấp chiều sâu kỹ thuật, trong khi CV truyền thống vẫn luôn sẵn sàng cho recruiter.'
}};
const projects={
en:[
['Press Q&A Management System – Press Center','Government Web Application','System allowing journalists to submit questions to the Press Center and transfer them to relevant departments for responses',['.NET Core MVC','ASP.NET API','C#','SQL Server','Entity Framework','LINQ','jQuery','Bootstrap'],'Fullstack Developer','Database design · SSO · authorization · API integration · IIS deployment'],
['Saigon High-Tech Park Content Management Website (SHTP)','Corporate News Portal','News website for Saigon High-Tech Park activities and exploitation projects',['ASP.NET / DotNetNuke','SQL Server','jQuery','Bootstrap'],'Fullstack Developer','Role-based content workflow · module development · maintenance'],
['Postal & Telecommunications Station Monitoring System','Government Tracking System','Software monitoring postal and telecommunications station locations in Ho Chi Minh City area',['Ruby on Rails','MySQL','Google Maps API'],'Backend / Fullstack Developer','Database design · map data processing · query optimization · maintenance'],
['Lavictoire Club – Mobile Application','Customer Service Mobile Application','Mobile application providing services for Lavictoire Club customers',['Flutter','REST API'],'Mobile Developer','UI development · API integration · app/server data flow'],
['House Exchange Support System','Graduation Project','Supporting house exchange through points and direct exchange on website and mobile platforms',['.NET Core MVC','SQL Server','SignalR','REST API','Google Maps'],'Fullstack Developer','Architecture · real-time chat · maps · ML price analysis']
],
vi:[
['Hệ thống Tiếp nhận & Xử lý câu hỏi – Trung tâm Báo chí','Ứng dụng Web Chính phủ','Hệ thống cho phép phóng viên đặt câu hỏi gửi đến Trung tâm Báo chí và chuyển giao cho các đơn vị ban ngành trả lời',['.NET Core MVC','ASP.NET API','C#','SQL Server','Entity Framework','LINQ','jQuery','Bootstrap'],'Fullstack Developer','Thiết kế CSDL · SSO · phân quyền · tích hợp API · IIS'],
['Website quản lý nội dung Khu Công Nghệ Cao (SHTP)','Cổng thông tin Doanh nghiệp','Website tin tức hoạt động và dự án khai thác của Khu Công Nghệ Cao',['ASP.NET / DotNetNuke','SQL Server','jQuery','Bootstrap'],'Fullstack Developer','Quy trình nội dung theo vai trò · phát triển module · bảo trì'],
['Hệ thống giám sát vị trí trạm Bưu chính – Viễn thông','Hệ thống Giám sát Chính phủ','Phần mềm giám sát vị trí bưu chính - viễn thông trên địa bàn TP.HCM',['Ruby on Rails','MySQL','Google Maps API'],'Backend / Fullstack Developer','Thiết kế CSDL · xử lý dữ liệu bản đồ · tối ưu truy vấn · bảo trì'],
['Lavictoire Club – Ứng dụng Di động','Ứng dụng Di động Dịch vụ Khách hàng','Ứng dụng di động cung cấp dịch vụ cho khách hàng Lavictoire Club',['Flutter','REST API'],'Mobile Developer','Phát triển UI · tích hợp API · xử lý luồng dữ liệu app/server'],
['Hệ thống hỗ trợ trao đổi nhà ở','Đồ án Tốt nghiệp','Hỗ trợ trao đổi nhà bằng điểm và trao đổi trực tiếp trên website và mobile',['.NET Core MVC','SQL Server','SignalR','REST API','Google Maps'],'Fullstack Developer','Kiến trúc · chat realtime · bản đồ · phân tích giá bằng ML']
]};
const skills={en:[['Architecture & Design','MVC Architecture · Microservices (basic) · RESTful API Design'],['Backend','ASP.NET Core · ASP.NET MVC · Entity Framework Core · LINQ · JWT · Role-based authorization'],['Frontend','HTML5 · CSS3 · JavaScript · jQuery · Bootstrap'],['Database','SQL Server · MySQL · Stored Procedure · View · Query Optimization'],['Tooling & Deployment','Git / GitLab · IIS Deployment · Postman'],['Others','Flutter · AI tools for work support']],vi:[['Kiến trúc & Thiết kế','MVC Architecture · Microservices (cơ bản) · RESTful API Design'],['Backend','ASP.NET Core · ASP.NET MVC · Entity Framework Core · LINQ · JWT · Role-based authorization'],['Frontend','HTML5 · CSS3 · JavaScript · jQuery · Bootstrap'],['Cơ sở dữ liệu','SQL Server · MySQL · Stored Procedure · View · Query Optimization'],['Công cụ & Triển khai','Git / GitLab · IIS Deployment · Postman'],['Khác','Flutter · AI tools hỗ trợ công việc']]};
let lang='en';
function render(){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(data[lang][k])el.textContent=data[lang][k]});
 document.querySelectorAll('[data-i18n-html]').forEach(el=>{const k=el.dataset.i18nHtml;if(data[lang][k])el.innerHTML=data[lang][k]});
 document.querySelectorAll('[data-i18n="cvTitle"]').forEach(el=>el.innerHTML=data[lang].cvTitle);
 const list=document.getElementById('projectList'); list.innerHTML='';
 projects[lang].forEach((p,i)=>{const a=document.createElement('article');a.className='project';a.innerHTML=
 '<div class="project-copy"><div><p class="eyebrow">'+String(i+1).padStart(2,'0')+' / '+p[1]+'</p><h3>'+p[0]+'</h3><p>'+p[2]+'</p><div class="tags">'+p[3].map(x=>'<span class="tag">'+x+'</span>').join('')+'</div></div><div class="project-meta"><div><b>ROLE</b><span>'+p[4]+'</span></div><div><b>OWNERSHIP</b><span>'+p[5]+'</span></div></div></div><div class="project-visual"><div class="diagram"><div class="node"><strong>CLIENT</strong><small>UI / Mobile</small></div><div class="arrow">→</div><div class="node accent"><strong>APPLICATION</strong><small>'+p[3][0]+'</small></div><div class="arrow">→</div><div class="node blue"><strong>DATA</strong><small>'+p[3].find(x=>x.includes('SQL')||x.includes('MySQL'))+'</small></div></div></div>';
 list.appendChild(a)});
 const sl=document.getElementById('skillList');sl.innerHTML=skills[lang].map(s=>'<div class="skill"><b>'+s[0]+'</b><span>'+s[1]+'</span></div>').join('');
}
document.getElementById('langToggle').addEventListener('click',()=>{lang=lang==='en'?'vi':'en';render()});
const box=document.querySelector('.export'),toggle=document.getElementById('exportToggle');
toggle.addEventListener('click',()=>{const open=box.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.addEventListener('click',e=>{if(!box.contains(e.target)){box.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});
function copy(){const text=lang==='en'?'Pham Minh Hieu — .NET Software Engineer with 2 years of experience developing web systems for enterprises and government agencies.':'Phạm Minh Hiếu — Kỹ sư phần mềm .NET với 2 năm kinh nghiệm phát triển hệ thống web cho doanh nghiệp và cơ quan chính phủ.';navigator.clipboard?.writeText(text)}
document.getElementById('copyProfile').addEventListener('click',copy);document.getElementById('copyProfile2').addEventListener('click',copy);render();