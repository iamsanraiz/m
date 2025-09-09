// Application State
let sections = [
    {
        "id": "section1", "name": "Breaking News", "subtitle": "Latest updates and developments", "headline": "Major Development Unfolds",
        "paragraphs": ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."],
        "quote": "This is a significant moment that will shape the future of our industry and society as a whole.",
        "imageUrl": "https://picsum.photos/600/300?random=1", "imageAlt": "News image showing breaking development", "imagePosition": "right"
    },
    {
        "id": "section2", "name": "Politics", "subtitle": "Government and policy analysis", "headline": "Political Landscape",
        "paragraphs": ["Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.", "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."],
        "quote": "The political climate continues to evolve, bringing new challenges and opportunities for public service.",
        "imageUrl": "https://picsum.photos/500/250?random=2", "imageAlt": "Political scene with government officials", "imagePosition": "left"
    },
    {
        "id": "section3", "name": "Economy", "subtitle": "Financial markets and business trends", "headline": "Economic Indicators",
        "paragraphs": ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.", "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."],
        "quote": "Market conditions remain volatile as investors seek stability in uncertain times.",
        "imageUrl": "https://picsum.photos/450/225?random=3", "imageAlt": "Economic charts and graphs", "imagePosition": "center"
    },
    {
        "id": "section4", "name": "Technology", "subtitle": "Innovation and digital transformation", "headline": "Tech Innovation",
        "paragraphs": ["Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.", "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."],
        "quote": "Technology continues to reshape how we live, work, and connect with one another.",
        "imageUrl": "https://picsum.photos/550/275?random=4", "imageAlt": "Technology innovation showcase", "imagePosition": "right"
    },
    {
        "id": "section5", "name": "World News", "subtitle": "International affairs and global events", "headline": "Global Perspective",
        "paragraphs": ["Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."],
        "quote": "International cooperation remains essential for addressing global challenges.",
        "imageUrl": "https://picsum.photos/480/240?random=5", "imageAlt": "Global news scene", "imagePosition": "left"
    },
    {
        "id": "section6", "name": "Sports", "subtitle": "Athletic competitions and achievements", "headline": "Athletic Excellence",
        "paragraphs": ["Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error."],
        "quote": "Sports continue to inspire and unite people across cultural and geographical boundaries.",
        "imageUrl": "https://picsum.photos/520/260?random=6", "imageAlt": "Sports action shot", "imagePosition": "center"
    },
    {
        "id": "section7", "name": "Culture", "subtitle": "Arts, entertainment, and society", "headline": "Cultural Insights",
        "paragraphs": ["Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.", "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."],
        "quote": "Cultural expression remains a vital force in shaping our collective identity and values.",
        "imageUrl": "https://picsum.photos/540/270?random=7", "imageAlt": "Cultural exhibition", "imagePosition": "right"
    },
    {
        "id": "section8", "name": "Opinion", "subtitle": "Editorial commentary and analysis", "headline": "Editorial Perspective",
        "paragraphs": ["Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.", "Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."],
        "quote": "Thoughtful discourse and diverse perspectives are essential for a healthy democracy.",
        "imageUrl": "https://picsum.photos/560/280?random=8", "imageAlt": "Opinion editorial", "imagePosition": "left"
    }
];

let settings = { sidebarHeader: "#01", publishDate: "September 9, 2025", author: "Staff Reporter" };
let currentView = 'live', currentSection = 0, zoomLevel = 100, editingSectionId = null;

// DOM Elements
const viewToggleBtn = document.getElementById('viewToggleBtn'), livePreview = document.getElementById('livePreview'), htmlCodeView = document.getElementById('htmlCodeView'), htmlCode = document.getElementById('htmlCode'), previewWrapper = document.getElementById('previewWrapper');
const zoomInBtn = document.getElementById('zoomInBtn'), zoomOutBtn = document.getElementById('zoomOutBtn'), zoomLevelSpan = document.getElementById('zoomLevel'), fullscreenBtn = document.getElementById('fullscreenBtn');
const sectionsList = document.getElementById('sectionsList'), addSectionBtn = document.getElementById('addSectionBtn');
const sidebarHeaderInput = document.getElementById('sidebarHeader'), publishDateInput = document.getElementById('publishDate'), authorInput = document.getElementById('author');
const copyHtmlBtn = document.getElementById('copyHtmlBtn'), downloadHtmlBtn = document.getElementById('downloadHtmlBtn');
const sectionCountSpan = document.getElementById('sectionCount'), wordCountSpan = document.getElementById('wordCount');
const sectionModal = document.getElementById('sectionModal'), closeSectionModal = document.getElementById('closeSectionModal'), sectionNameInput = document.getElementById('sectionName'), sectionSubtitleInput = document.getElementById('sectionSubtitle'), sectionHeadlineInput = document.getElementById('sectionHeadline'), sectionParagraphsInput = document.getElementById('sectionParagraphs'), sectionQuoteInput = document.getElementById('sectionQuote'), sectionImageUrlInput = document.getElementById('sectionImageUrl'), sectionImageAltInput = document.getElementById('sectionImageAlt'), sectionImagePositionInput = document.getElementById('sectionImagePosition'), saveSectionBtn = document.getElementById('saveSectionBtn'), cancelSectionBtn = document.getElementById('cancelSectionBtn');
const toast = document.getElementById('toast'), toastMessage = document.getElementById('toastMessage');
const resizer = document.getElementById('resizer'), previewPanel = document.getElementById('previewPanel');
const settingsHeader = document.getElementById('settingsHeader');

// Global Functions
window.showSection = (index) => { currentSection = index; updatePreview(); };
window.editSection = (sectionId) => editSectionHandler(sectionId);
window.deleteSection = (sectionId) => deleteSectionHandler(sectionId);

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    updatePreview();
    updateSectionsList();
    updateStats();
    updateSettings();
});

// Event Listeners
function setupEventListeners() {
    viewToggleBtn.addEventListener('click', toggleView);
    zoomInBtn.addEventListener('click', () => changeZoom(10));
    zoomOutBtn.addEventListener('click', () => changeZoom(-10));
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    addSectionBtn.addEventListener('click', addNewSection);
    sidebarHeaderInput.addEventListener('input', updateSettings);
    publishDateInput.addEventListener('input', updateSettings);
    authorInput.addEventListener('input', updateSettings);
    copyHtmlBtn.addEventListener('click', copyHtmlToClipboard);
    downloadHtmlBtn.addEventListener('click', downloadHtml);
    closeSectionModal.addEventListener('click', closeModal);
    cancelSectionBtn.addEventListener('click', closeModal);
    saveSectionBtn.addEventListener('click', saveSection);
    sectionModal.addEventListener('click', (e) => { if (e.target === sectionModal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sectionModal.classList.contains('hidden')) closeModal(); });

    // New listeners for resizable panels and collapsible settings
    resizer.addEventListener('mousedown', initResize);
    settingsHeader.addEventListener('click', () => settingsHeader.parentElement.classList.toggle('collapsed'));
}

// View Toggle
function toggleView() {
    const btnText = viewToggleBtn.querySelector('.btn-text');
    if (currentView === 'live') {
        currentView = 'code';
        btnText.textContent = 'Live Preview';
        livePreview.classList.remove('active');
        htmlCodeView.classList.add('active');
        updateCodeView();
    } else {
        currentView = 'live';
        btnText.textContent = 'HTML Code';
        htmlCodeView.classList.remove('active');
        livePreview.classList.add('active');
    }
}

// Zoom Controls
function changeZoom(delta) {
    zoomLevel = Math.max(50, Math.min(200, zoomLevel + delta));
    zoomLevelSpan.textContent = `${zoomLevel}%`;
    previewWrapper.style.transform = `scale(${zoomLevel / 100})`;
}

// Fullscreen Toggle
function toggleFullscreen() {
    document.querySelector('.preview-panel').classList.toggle('fullscreen');
}

// Update Live Preview
function updatePreview() {
    if (sections.length === 0) return;
    const updateElement = (id, content) => { const el = document.getElementById(id); if (el) el.textContent = content; };

    updateElement('preview-sidebar-header', settings.sidebarHeader);
    const navButtons = document.getElementById('preview-nav-buttons');
    if (navButtons) navButtons.innerHTML = sections.map((s, i) => `<button class="nav-item ${i === currentSection ? 'active' : ''}" onclick="showSection(${i})">${s.name}</button>`).join('');

    const current = sections[currentSection];
    updateElement('preview-main-title', current.name);
    updateElement('preview-main-subtitle', current.subtitle);
    updateElement('preview-publish-date', settings.publishDate);
    updateElement('preview-author', settings.author);

    const articleBody = document.getElementById('preview-article-body');
    if (articleBody) articleBody.innerHTML = generateSectionContent(current);
    if (currentView === 'code') updateCodeView();
}

// Generate Section & Image HTML
function generateImageHtml(section) {
    const pos = section.imagePosition;
    const style = pos === 'left' ? 'float:left; margin:0 20px 20px 0;' : pos === 'right' ? 'float:right; margin:0 0 20px 20px;' : 'display:block; margin:20px auto; max-width:90%;';
    return `<p><img src="${section.imageUrl}" alt="${section.imageAlt || ''}" style="${style}"></p>`;
}
function generateSectionContent(section) {
    let content = `<h3>${section.headline}</h3>`;
    const paragraphs = section.paragraphs || [];
    if (section.imageUrl) {
        const imageHtml = generateImageHtml(section);
        if (paragraphs.length > 0) {
            content += `<p>${paragraphs[0]}</p>${imageHtml}`;
            content += paragraphs.slice(1).map(p => `<p>${p}</p>`).join('');
        } else {
            content += imageHtml;
        }
    } else {
        content += paragraphs.map(p => `<p>${p}</p>`).join('');
    }
    if (section.quote) content += `<div class="quote">"${section.quote}"</div>`;
    return content;
}

// Update Code View & Generate Final HTML
function updateCodeView() {
    if (!htmlCode) return;
    htmlCode.textContent = generateCompleteHTML();
    if (typeof Prism !== 'undefined') Prism.highlightElement(htmlCode);
}
function generateCompleteHTML() {
    const blogContentObj = sections.reduce((acc, section, index) => {
        acc[`section${index + 1}`] = { title: section.name, subtitle: section.subtitle, content: generateSectionContent(section) };
        return acc;
    }, {});

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newspaper Post</title>
</head>
<body>
    <div id="scoped-newspaper-post">
        <div class="page-wrapper">
            <header class="site-header"><h7>MAGZINE<span class="sanraiz-text">SANRAIZ</span></h7></header>
            <div class="newspaper-container">
                <nav class="sidebar">
                    <h2>${settings.sidebarHeader}</h2>
                    <div class="nav-items-wrapper">${sections.map((s, i) => `<button class="nav-item" data-section="section${i + 1}">${s.name}</button>`).join('\n                        ')}</div>
                </nav>
                <main class="content-area">
                    <header class="article-header">
                        <h7 class="article-title" id="main-title"></h7>
                        <p class="article-subtitle" id="main-subtitle"></p>
                        <div class="article-meta"><span id="publish-date">${settings.publishDate}</span> | <span id="author">${settings.author}</span></div>
                    </header>
                    <article id="article-body"></article>
                </main>
            </div>
        </div>
    </div>
    <style>@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Georgia:wght@400;700&family=Times+New+Roman&display=swap');#scoped-newspaper-post{--primary-font:'Georgia','Times New Roman',serif;--heading-font:'Playfair Display',serif;--primary-text-color:#333;--secondary-text-color:#666;--meta-text-color:#999;--background-color:#fafafa;--paper-background-color:#fff;--sidebar-background-color:#f8f8f8;--border-color:#333;--hover-background-color:#e0e0e0;--active-background-color:#333;--active-text-color:#fff;font-family:var(--primary-font);line-height:1.6;color:var(--primary-text-color);background-color:var(--background-color);transition:background-color .3s ease,color .3s ease}#scoped-newspaper-post *,#scoped-newspaper-post *::after,#scoped-newspaper-post *::before{margin:0;padding:0;box-sizing:border-box}#scoped-newspaper-post .page-wrapper{max-width:1200px;margin:0 auto;background:var(--paper-background-color);box-shadow:0 2px 10px rgba(0,0,0,.1);transition:background-color .3s ease}#scoped-newspaper-post .site-header{padding:20px 40px;text-align:center;border-bottom:3px double var(--border-color);transition:border-color .3s ease}#scoped-newspaper-post .site-header h7{font-family:var(--heading-font);font-size:48px;font-weight:700;text-transform:uppercase;letter-spacing:2px;line-height:1;display:inline-block;position:relative;color:#2c3e50;margin-right:20px}#scoped-newspaper-post .site-header h7 .sanraiz-text{font-family:'Times New Roman',serif;font-size:20px;font-weight:700;letter-spacing:1px;text-transform:uppercase;position:absolute;bottom:-15px;right:-50px;white-space:nowrap;color:var(--primary-text-color);transform:scaleX(.9);transform-origin:left;background:linear-gradient(45deg,#e74c3c,#f39c12);-webkit-background-clip:text;background-clip:text;color:transparent}#scoped-newspaper-post .newspaper-container{display:flex}#scoped-newspaper-post .sidebar{width:20%;background:var(--sidebar-background-color);border-right:3px solid var(--border-color);padding:20px 15px;transition:background-color .3s ease,border-color .3s ease}#scoped-newspaper-post .sidebar h2{font-family:var(--heading-font);font-size:24px;font-weight:700;margin-bottom:20px;color:var(--primary-text-color);text-align:right;border-bottom:2px solid var(--border-color);padding-bottom:10px;transition:border-color .3s ease,color .3s ease}#scoped-newspaper-post .nav-item{background:0 0;border:none;text-align:left;width:100%;font-family:var(--primary-font);display:block;padding:12px 10px;margin-bottom:5px;color:var(--primary-text-color);text-decoration:none;border-left:3px solid transparent;transition:all .3s ease;font-size:17px;font-weight:500;cursor:pointer}#scoped-newspaper-post .nav-item:hover{background-color:var(--hover-background-color)}#scoped-newspaper-post .nav-item.active{background-color:var(--active-background-color);color:var(--active-text-color)}#scoped-newspaper-post .content-area{width:80%;padding:30px 40px}#scoped-newspaper-post .article-header{border-bottom:3px double var(--border-color);margin-bottom:30px;padding-bottom:20px;transition:border-color .3s ease}#scoped-newspaper-post .article-meta,#scoped-newspaper-post .article-subtitle,#scoped-newspaper-post .article-title{transition:color .3s ease}#scoped-newspaper-post .article-title{font-family:var(--heading-font);font-size:42px;font-weight:700;line-height:1.2;margin-bottom:10px;color:var(--primary-text-color)}#scoped-newspaper-post .article-subtitle{font-size:18px;color:var(--secondary-text-color);font-style:italic;margin-bottom:15px}#scoped-newspaper-post .article-meta{font-size:12px;color:var(--meta-text-color);text-transform:uppercase;letter-spacing:1px}#scoped-newspaper-post #article-body{animation:scoped-np-fadeIn .5s ease-in}#scoped-newspaper-post #article-body h3{font-family:var(--heading-font);font-size:28px;margin-bottom:20px;color:var(--primary-text-color);transition:color .3s ease}#scoped-newspaper-post #article-body p{margin-bottom:18px;font-size:16px;line-height:1.8;text-align:justify}#scoped-newspaper-post #article-body img{max-width:100%;height:auto;display:block;margin:20px 0;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,.1)}#scoped-newspaper-post .quote{border-left:4px solid var(--border-color);padding-left:20px;margin:25px 0;font-style:italic;font-size:18px;color:var(--secondary-text-color);transition:border-color .3s ease,color .3s ease}@keyframes scoped-np-fadeIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@media (max-width:768px){#scoped-newspaper-post .newspaper-container{flex-direction:column}#scoped-newspaper-post .sidebar{width:100%;height:auto;position:relative}#scoped-newspaper-post .content-area{width:100%;padding:20px}#scoped-newspaper-post .site-header{padding:15px 20px;overflow-x:hidden}#scoped-newspaper-post .site-header h7{font-size:34px;margin-right:0}#scoped-newspaper-post .site-header h7 .sanraiz-text{font-size:15px;bottom:-10px;right:-25px}#scoped-newspaper-post .sidebar h2{font-size:22px}#scoped-newspaper-post .article-title{font-size:28px}#scoped-newspaper-post #article-body h3{font-size:24px}#scoped-newspaper-post .nav-items-wrapper{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;padding:0 5px}#scoped-newspaper-post .sidebar .nav-item{flex:unset;width:100%;text-align:left;white-space:nowrap;padding:12px 15px;font-size:16px;border-bottom:2px solid transparent;border-radius:4px;margin:0}#scoped-newspaper-post .sidebar .nav-item:hover{background-color:var(--hover-background-color)}#scoped-newspaper-post .sidebar .nav-item.active{background-color:var(--active-background-color);color:var(--active-text-color);border-bottom-color:var(--primary-text-color)}}body.dark #scoped-newspaper-post,body.dark-mode #scoped-newspaper-post{--primary-text-color:#e0e0e0;--secondary-text-color:#a0a0a0;--meta-text-color:#888;--background-color:#121212;--paper-background-color:#1e1e1e;--sidebar-background-color:#252525;--border-color:#555;--hover-background-color:#3a3a3a;--active-background-color:#e0e0e0;--active-text-color:#121212}</style>
    <script>
        (function() {
            const container=document.getElementById('scoped-newspaper-post'); if(!container) return;
            const content = ${JSON.stringify(blogContentObj, null, 12)};
            const title=container.querySelector('#main-title'),subtitle=container.querySelector('#main-subtitle'),body=container.querySelector('#article-body'),navs=container.querySelectorAll('.nav-item');
            function show(id){ const data=content[id]; if(!data) return; title.textContent=data.title; subtitle.textContent=data.subtitle; body.innerHTML=data.content; body.style.animation='none'; void body.offsetWidth; body.style.animation='scoped-np-fadeIn 0.5s ease-in'; navs.forEach(i=>i.classList.toggle('active',i.dataset.section===id)); }
            navs.forEach(i=>i.addEventListener('click',()=>show(i.dataset.section)));
            show('section1');
        })();
    </script>
</body>
</html>`;
}

// Update Sections List & Drag-and-Drop
function updateSectionsList() {
    if (!sectionsList) return;
    sectionsList.innerHTML = sections.map((section, index) => `
        <div class="section-item" draggable="true" data-index="${index}">
            <div class="section-header">
                <span class="drag-handle">⋮⋮</span>
                <h4 class="section-title">${section.name}</h4>
                <div class="section-controls">
                    <button class="btn btn--outline btn--sm" onclick="editSection('${section.id}')">Edit</button>
                    <button class="btn btn--outline btn--sm" onclick="deleteSection('${section.id}')">Delete</button>
                </div>
            </div>
            <p class="section-subtitle">${section.subtitle}</p>
        </div>
    `).join('');
    addDragAndDropListeners();
}
function addDragAndDropListeners() {
    document.querySelectorAll('.section-item').forEach((item, index) => {
        item.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', index); item.classList.add('dragging'); });
        item.addEventListener('dragend', () => item.classList.remove('dragging'));
        item.addEventListener('dragover', e => e.preventDefault());
        item.addEventListener('drop', e => {
            e.preventDefault();
            const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
            const dropIndex = Array.from(sectionsList.children).indexOf(item);
            if (dragIndex !== dropIndex) {
                const [dragged] = sections.splice(dragIndex, 1);
                sections.splice(dropIndex, 0, dragged);
                updateSectionsList();
                updatePreview();
                updateStats();
                showToast('Sections reordered!');
            }
        });
    });
}

// Section Management
function addNewSection() {
    const newSection = { id: `section${Date.now()}`, name: 'New Section', subtitle: 'Section subtitle', headline: 'Section Headline', paragraphs: ['Enter your content here.'], quote: '', imageUrl: '', imageAlt: '', imagePosition: 'right' };
    sections.push(newSection);
    updateSectionsList();
    updatePreview();
    updateStats();
    editSectionHandler(newSection.id);
}
function editSectionHandler(sectionId) {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;
    editingSectionId = sectionId;
    const setValue = (id, val) => document.getElementById(id).value = val;
    setValue('sectionName', section.name);
    setValue('sectionSubtitle', section.subtitle);
    setValue('sectionHeadline', section.headline);
    setValue('sectionParagraphs', section.paragraphs.join('\n\n'));
    setValue('sectionQuote', section.quote);
    setValue('sectionImageUrl', section.imageUrl || '');
    setValue('sectionImageAlt', section.imageAlt || '');
    setValue('sectionImagePosition', section.imagePosition || 'right');
    sectionModal.classList.remove('hidden');
}
function saveSection() {
    if (!editingSectionId) return;
    const section = sections.find(s => s.id === editingSectionId);
    if (!section) return;
    const getValue = id => document.getElementById(id).value.trim();
    section.name = getValue('sectionName') || 'Untitled';
    section.subtitle = getValue('sectionSubtitle');
    section.headline = getValue('sectionHeadline');
    section.paragraphs = document.getElementById('sectionParagraphs').value.split('\n\n').map(p => p.trim()).filter(Boolean);
    section.quote = getValue('sectionQuote');
    section.imageUrl = getValue('sectionImageUrl');
    section.imageAlt = getValue('sectionImageAlt');
    section.imagePosition = document.getElementById('sectionImagePosition').value;
    closeModal();
    updateSectionsList();
    updatePreview();
    updateStats();
    showToast('Section saved successfully!');
}
function deleteSectionHandler(sectionId) {
    if (sections.length <= 1) return showToast('Cannot delete the last section!', 'error');
    const index = sections.findIndex(s => s.id === sectionId);
    if (index > -1) {
        sections.splice(index, 1);
        if (currentSection >= sections.length) currentSection = sections.length - 1;
        updateSectionsList();
        updatePreview();
        updateStats();
        showToast('Section deleted successfully!');
    }
}
function closeModal() {
    sectionModal.classList.add('hidden');
    editingSectionId = null;
}

// Settings, Stats, Export
function updateSettings() {
    settings = { sidebarHeader: sidebarHeaderInput.value, publishDate: publishDateInput.value, author: authorInput.value };
    updatePreview();
}
function updateStats() {
    sectionCountSpan.textContent = `${sections.length} sections`;
    const totalWords = sections.reduce((total, s) => {
        const pWords = s.paragraphs.join(' ').split(/\s+/).filter(Boolean).length;
        const qWords = s.quote ? s.quote.split(/\s+/).filter(Boolean).length : 0;
        return total + pWords + qWords;
    }, 0);
    wordCountSpan.textContent = `${totalWords} words`;
}
async function copyHtmlToClipboard() {
    try { await navigator.clipboard.writeText(generateCompleteHTML()); showToast('HTML copied to clipboard!'); }
    catch (err) { console.error('Copy failed:', err); showToast('Failed to copy HTML', 'error'); }
}
function downloadHtml() {
    try {
        const blob = new Blob([generateCompleteHTML()], { type: 'text/html' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'newspaper.html';
        a.click();
        URL.revokeObjectURL(a.href);
        showToast('HTML file downloaded!');
    } catch (err) { console.error('Download failed:', err); showToast('Failed to download HTML', 'error'); }
}
function showToast(message, type = 'success') {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Resizable Panel Logic
function initResize(e) {
    e.preventDefault();
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
}
function resize(e) {
    const minWidth = 350;
    if (e.clientX > minWidth && window.innerWidth - e.clientX > minWidth) {
        previewPanel.style.flexBasis = `${e.clientX}px`;
    }
}
function stopResize() {
    window.removeEventListener('mousemove', resize);
    window.removeEventListener('mouseup', stopResize);
}