import Link from 'next/link'
import { notFound } from 'next/navigation'

type CampaignImage = { src: string; label: string }

const projects = {
  devcatalyst: {
    title: 'DevCatalyst LinkedIn Campaigns',
    category: 'Community & event marketing',
    period: '2025 – Present',
    intro: 'Planned and published 10+ LinkedIn posts promoting technical workshops, hackathons, and community events.',
    details: [
      'Wrote promotional copy aligned with the brand voice and campaign goals.',
      'Worked with organizers and designers to coordinate timely publishing.',
      'Designed promotional creatives for workshops, hackathons, and community initiatives.',
    ],
    result: '10+ LinkedIn posts published',
    gallery: [
      { src: '/images/post1.png', label: 'Exora 2026 and CatalysDays campaign' },
      { src: '/images/post2.png', label: 'CatalysDays 2026 open stage campaign' },
      { src: '/images/post3.png', label: 'Agentic AI workshop campaign' },
      { src: '/images/post4.png', label: 'DevCatalyst community event recap' },
    ] satisfies CampaignImage[],
  },
  jewellers: {
    title: 'Manchala Ashok Jewellers Digital Branding',
    category: 'Social media & digital branding',
    period: '2022 – Present',
    intro: 'Built a consistent premium social presence through campaign planning, creative production, and copywriting.',
    details: [
      'Designed 300+ creatives for jewellery collections, festive campaigns, and promotional events.',
      'Planned monthly content calendars and regular publishing.',
      'Maintained a premium identity for an audience of 8K+ followers.',
    ],
    result: '300+ creatives · 8K+ followers',
    gallery: [
      { src: '/images/CR1.png', label: 'Custom handmade jewellery campaign' },
      { src: '/images/CR2.png', label: 'Crafting memories brand story' },
      { src: '/images/CR3.png', label: 'Sankranti exhibition campaign' },
      { src: '/images/CR4.png', label: 'Jewellery product catalogue' },
    ] satisfies CampaignImage[],
  },
  khusboo: {
    title: 'Khusboo | Life & Wellness Coach',
    category: 'Content strategy & audience growth',
    period: '2026 – Present',
    intro: 'Created audience-centric storytelling Reels and relationship coaching content designed to connect with viewers.',
    details: [
      'Developed narrative angles around relationships and personal growth.',
      'Produced short-form content that reached 660K views on a Reel.',
      'Used audience response to shape subsequent themes and hooks.',
    ],
    result: '660K Reel views',
    reels: [
      'Dca96xEzAVO', 'Dcdik99p0z6', 'DdoOs_ape9K', 'DdTnHhDzbvj',
      'Dc53h7SpGCG', 'DcgHqBFpLdk', 'DbF_SFqzfIn',
    ],
  },
  beena: {
    title: 'Beena | Life & Wellness Coach',
    category: 'Content strategy & community growth',
    period: '2026 – Present',
    intro: 'Managed social content for a coach serving homemakers and working women, focusing on relatable Reels.',
    details: [
      'Created stories around work-life balance, family dynamics, and everyday challenges.',
      'Grew the account from 800 to 1,645 followers, a 105% increase.',
      'Reels averaged ~10K views and generated strong engagement and direct inquiries.',
    ],
    result: '+105% followers · ~10K average Reel views',
    reels: [
      { id: 'DfE9aClJSAx', views: '324K' },
      { id: 'De_yJ8vJRQK', views: '239K' },
      { id: 'DewT96npGYr', views: '67K' },
      { id: 'DemAlztJegF', views: '69.2K' },
      { id: 'DeZJZ6ipoGV', views: '59.2K' },
      { id: 'DdjFaoOJ7nZ', views: '174K' },
      { id: 'Ddd6y4UJ4R4', views: '74.8K' },
    ],
  },
  deepak: {
    title: 'Deepak Poddar | MSME Coach',
    category: 'Business education & campaign marketing',
    period: '2026 – Present',
    intro: 'Managed social content and marketing campaigns for an MSME coach specializing in business and supply chain finance.',
    details: [
      'Developed educational Reels, promotional campaigns, and storytelling posts for business owners.',
      'Planned and promoted masterclasses and workshops.',
      'Supported growth from 27K to 31.8K followers; the top Reel reached 220K views.',
    ],
    result: '+4.8K followers · 220K Reel views',
  },
} as const

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-[#173D31] text-[#D4DEDA]">
      <header className="border-b border-[#079B78]/25 px-6 py-5">
        <div className="mx-auto flex max-w-5xl justify-between">
          <Link href="/" className="font-playfair text-xl font-bold text-[#F0F8C9]">Bhuvana</Link>
          <Link href="/#work" className="text-sm text-[#B5F0A0] hover:text-[#F0F8C9]">← Back to featured work</Link>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B5F0A0]">{project.category} · {project.period}</p>
        <h1 className="mt-4 max-w-4xl font-playfair text-4xl font-bold text-[#F0F8C9] sm:text-6xl">{project.title}</h1>

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_280px]">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#F0F8C9]">Project overview</h2>
            <p className="mt-4 leading-7">{project.intro}</p>
            <h2 className="mt-8 font-playfair text-2xl font-bold text-[#F0F8C9]">Strategy & execution</h2>
            <ul className="mt-4 space-y-3">
              {project.details.map((detail) => <li key={detail} className="flex gap-3 leading-7"><span className="text-[#B5F0A0]">✦</span>{detail}</li>)}
            </ul>
          </div>
          <aside className="h-fit rounded-2xl border border-[#079B78]/35 bg-[#075E59]/50 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-[#B5F0A0]">Key outcome</p>
            <p className="mt-3 font-playfair text-2xl font-bold text-[#F0F8C9]">{project.result}</p>
          </aside>
        </div>

        {'gallery' in project && (
          <section className="mt-12">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B5F0A0]">Selected campaign work</p>
                <h2 className="mt-2 font-playfair text-3xl font-bold text-[#F0F8C9]">Posts &amp; creatives</h2>
              </div>
              <span className="text-sm text-[#D4DEDA]/70">{project.gallery.length} examples</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {project.gallery.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-2xl border border-[#079B78]/35 bg-[#0A2724]/70 p-3">
                  <img src={image.src} alt={image.label} className="h-[420px] w-full rounded-xl object-contain" />
                  <figcaption className="px-2 pb-1 pt-3 text-sm text-[#D4DEDA]">{image.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {'reels' in project && (
          <section className="mt-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B5F0A0]">Selected work</p>
            <h2 className="mt-2 font-playfair text-3xl font-bold text-[#F0F8C9]">Instagram Reels</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {project.reels.map((reel, index) => {
                const id = typeof reel === 'string' ? reel : reel.id
                const views = typeof reel === 'string' ? null : reel.views
                return (
                  <div key={id} className="overflow-hidden rounded-2xl border border-[#079B78]/35 bg-[#0A2724]/70 p-3">
                    <iframe title={`${slug === 'beena' ? 'Beena' : 'Khusboo'} campaign Reel ${index + 1}`} src={`https://www.instagram.com/reel/${id}/embed`} className="aspect-[9/16] w-full rounded-xl" allowFullScreen loading="lazy" />
                    {views && <p className="mt-3 px-2 font-semibold text-[#F0F8C9]">{views} views</p>}
                    <a href={`https://www.instagram.com/reel/${id}/`} target="_blank" rel="noreferrer" className="mt-2 block px-2 text-sm text-[#B5F0A0] hover:text-[#F0F8C9]">Open Reel {index + 1} on Instagram ↗</a>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {slug === 'deepak' ? (
          <p className="mt-10 rounded-2xl border border-dashed border-[#079B78]/40 bg-[#075E59]/25 p-5 text-sm leading-6 text-[#D4DEDA]/80">
            Reel gallery can be added here when the performing Reel links are ready.
          </p>
        ) : null}
      </article>
    </main>
  )
}
