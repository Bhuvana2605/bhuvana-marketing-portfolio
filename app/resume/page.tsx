import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resume · Bhuvana Sri Chikoti | Social Media & Content Marketing',
  description: 'View and download the professional resume and curriculum vitae of Bhuvana Sri Chikoti, Social Media and Content Marketing professional based in Hyderabad, India.',
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#FEF0B6] text-[#472F26] flex flex-col font-sans selection:bg-[#472F26] selection:text-[#FEF0B6]">
      {/* Aurora Ambient Glow */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(71,47,38, 0.28) 0%, transparent 60%), radial-gradient(circle at 85% 30%, rgba(71,47,38, 0.32) 0%, transparent 55%)',
        }}
      />

      {/* Top Navbar / Header Bar */}
      <header className="sticky top-0 z-30 w-full bg-[#FEF0B6]/90 backdrop-blur-md border-b border-[#472F26]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Back to Portfolio Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-[#472F26] hover:text-[#472F26] transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Portfolio</span>
          </Link>

          {/* Centered Document Tag */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#BBD3E0]/60 border border-[#472F26]/40">
            <span className="w-2 h-2 rounded-full bg-[#472F26] animate-pulse" />
            <span className="text-xs font-mono font-medium text-[#472F26]">
              Bhuvana_Resume.pdf
            </span>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#472F26]/40 text-xs font-mono text-[#472F26] hover:bg-[#BBD3E0] transition-colors"
            >
              <span>Raw PDF</span>
              <svg className="w-3.5 h-3.5 text-[#472F26]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href="/resume.pdf"
              download="Bhuvana_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#472F26] text-[#BBD3E0] font-semibold text-xs sm:text-sm shadow-md hover:bg-[#472F26] transition-all hover:scale-102 active:scale-98"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col gap-6">
        {/* Title Bar & Quick Contact Card */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#BBD3E0]/50 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-[#472F26]/35">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#472F26] font-semibold">
                Curriculum Vitae
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FEF0B6] text-[#472F26] border border-[#472F26]/30">
                Official Resume
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-[#472F26] mt-1">
              Bhuvana Sri Chikoti
            </h1>
            <p className="text-xs sm:text-sm text-[#472F26] mt-0.5 font-sans">
              Social Media &amp; Content Marketing Professional · Hyderabad, India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="mailto:chikotibhuvanasri26@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FEF0B6]/80 hover:bg-[#FEF0B6] text-xs font-mono text-[#472F26] border border-[#472F26]/30 transition-colors"
            >
              <span>✉</span>
              <span>chikotibhuvanasri26@gmail.com</span>
            </a>
            <a
              href="/resume.pdf"
              download="Bhuvana_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#472F26] text-[#BBD3E0] text-xs font-mono font-bold transition-all hover:bg-[#472F26]"
            >
              <span>⬇ Download PDF</span>
            </a>
          </div>
        </div>

        {/* Career Summary Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-[#BBD3E0]/30 border border-[#472F26]/30">
            <span className="text-[10.5px] font-mono text-[#472F26] uppercase tracking-wider block">Current Role</span>
            <span className="text-xs sm:text-sm font-semibold text-[#472F26] mt-0.5 block">Social Media Manager</span>
            <span className="text-[11px] text-[#472F26]">IP Agency (3 Clients)</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#BBD3E0]/30 border border-[#472F26]/30">
            <span className="text-[10.5px] font-mono text-[#472F26] uppercase tracking-wider block">Client Management</span>
            <span className="text-xs sm:text-sm font-semibold text-[#472F26] mt-0.5 block">Social Media Manager</span>
            <span className="text-[11px] text-[#472F26]">IP Agency (3 Clients)</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#BBD3E0]/30 border border-[#472F26]/30">
            <span className="text-[10.5px] font-mono text-[#472F26] uppercase tracking-wider block">Community Head</span>
            <span className="text-xs sm:text-sm font-semibold text-[#472F26] mt-0.5 block">Social Media Head</span>
            <span className="text-[11px] text-[#472F26]">DevCatalyst (10+ Campaigns)</span>
          </div>

          <div className="p-3.5 rounded-xl bg-[#BBD3E0]/30 border border-[#472F26]/30">
            <span className="text-[10.5px] font-mono text-[#472F26] uppercase tracking-wider block">Education</span>
            <span className="text-xs sm:text-sm font-semibold text-[#472F26] mt-0.5 block">B.E. Computer Engg</span>
            <span className="text-[11px] text-[#472F26]">Matrusri (CGPA 8.27)</span>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="relative w-full rounded-2xl bg-[#BBD3E0]/40 border border-[#472F26]/40 shadow-2xl overflow-hidden p-2 sm:p-3 flex flex-col">
          {/* Viewer Toolbar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#472F26]/30 mb-2 text-xs font-mono text-[#472F26]/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#472F26]" />
              <span className="text-xs text-[#472F26] font-medium">Interactive Resume Viewer</span>
            </div>
            <span className="text-[11px] text-[#472F26]">PDF Preview · Ready for Print &amp; Save</span>
          </div>

          {/* Embedded PDF iframe */}
          <div className="w-full h-[70vh] sm:h-[82vh] rounded-xl overflow-hidden bg-[#FEF0B6] border border-[#472F26]/25 relative">
            <iframe
              src="/resume.pdf#view=FitH"
              title="Bhuvana Sri Chikoti Resume"
              className="w-full h-full border-0"
            />
          </div>

          {/* Mobile Fallback Banner */}
          <div className="mt-3 p-3 rounded-xl bg-[#FEF0B6]/80 border border-[#472F26]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <p className="text-[#472F26] text-center sm:text-left">
              Viewing on a mobile device or having trouble previewing inline?
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md border border-[#472F26]/50 text-[#472F26] hover:bg-[#472F26]/40 transition-colors font-mono"
              >
                Open in Full Tab
              </a>
              <a
                href="/resume.pdf"
                download="Bhuvana_Resume.pdf"
                className="px-3.5 py-1.5 rounded-md bg-[#472F26] text-[#BBD3E0] font-semibold hover:bg-[#472F26] transition-colors font-mono"
              >
                Download File
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-[#472F26]/25 text-center text-xs font-mono text-[#472F26]">
        <span>Bhuvana Sri Chikoti · Hyderabad, India · All rights reserved</span>
      </footer>
    </div>
  )
}
