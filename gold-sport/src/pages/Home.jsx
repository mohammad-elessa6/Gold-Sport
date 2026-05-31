import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, ShieldCheck, Truck, Award, Send, CheckCircle2 } from 'lucide-react'
import { CATEGORIES, featured } from '../data/products'
import ProductCard from '../components/ProductCard'
import ProductImage from '../components/ProductImage'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const { user } = useAuth()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div>
      {/* Hero */}
      <section className="mesh-bg relative overflow-hidden">
        <div className="grid-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <span className="mb-5 inline-flex animate-fade-in items-center gap-2 rounded-full border border-electric-500/40 bg-electric-500/10 px-4 py-1.5 text-sm font-medium text-electric-300">
            <Zap size={15} className="text-glow" /> Welcome back, {user?.name?.split(' ')[0] || 'athlete'} 💪
          </span>
          <h1 className="animate-fade-up text-5xl font-bold leading-[1.05] text-white sm:text-7xl">
            Train Hard. <br />
            <span className="text-gradient">Look Sharp.</span> Stay Strong.
          </h1>
          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-lg text-slate-300" style={{ animationDelay: '120ms' }}>
            Your one-stop shop for fitness essentials — equipment, supplements,
            sportswear and bags from the brands you trust.
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap justify-center gap-3" style={{ animationDelay: '220ms' }}>
            <Link to="/equipment" className="btn-primary">Shop now <ArrowRight size={18} /></Link>
            <Link to="/supplements" className="btn-ghost text-white">Browse supplements</Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        {/* Categories */}
        <section className="py-16">
          <SectionHeader kicker="Browse" title="Shop by Category" />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} to={`/${c.slug}`}
                className="group relative h-44 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <ProductImage src={c.image} alt={c.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">{c.label}</h3>
                  <span className="flex items-center gap-1 text-sm text-electric-300 opacity-0 transition group-hover:opacity-100">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section className="py-10">
          <SectionHeader kicker="Hand-picked" title="Featured Products" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured().map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-16">
          <SectionHeader kicker="Why GOLD Sport" title="Built for athletes" />
          <div className="grid gap-5 md:grid-cols-3">
            <Feature icon={Award} title="Premium Quality" text="Only the best equipment and sportswear make it onto our shelves." />
            <Feature icon={Truck} title="Fast Delivery" text="Quick, reliable shipping on every single order." />
            <Feature icon={ShieldCheck} title="Trusted Brands" text="Nike, Adidas, Under Armour, BioTechUSA and more." />
          </div>
        </section>

        {/* Reviews */}
        <section className="py-10">
          <SectionHeader kicker="Loved by lifters" title="Customer Reviews" />
          <div className="grid gap-5 md:grid-cols-3">
            <Review name="Karim" text="Amazing quality! The equipment feels truly professional." />
            <Review name="Maya" text="Fast delivery and great customer service every time." />
            <Review name="Samir" text="The best sports store I've ever ordered from, hands down." />
          </div>
        </section>

        {/* Newsletter */}
        <section className="my-16 overflow-hidden rounded-3xl border border-electric-500/30 bg-gradient-to-br from-electric-600/15 to-glow/5 p-10 text-center">
          <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
          <p className="mx-auto mt-2 max-w-md text-slate-500 dark:text-slate-400">
            Get updates on new products and exclusive offers.
          </p>
          {subscribed ? (
            <p className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-500">
              <CheckCircle2 size={20} /> Thanks for subscribing!
            </p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true) }}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" className="input-field flex-1" />
              <button type="submit" className="btn-primary"><Send size={16} /> Subscribe</button>
            </form>
          )}
        </section>
      </div>
    </div>
  )
}

function SectionHeader({ kicker, title }) {
  return (
    <div className="mb-8 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-500">{kicker}</p>
      <h2 className="mt-1 text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  )
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="surface p-7 text-center transition hover:border-electric-500/50 hover:shadow-glow">
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-electric-600/10 text-electric-500">
        <Icon size={26} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{text}</p>
    </div>
  )
}

function Review({ name, text }) {
  return (
    <div className="surface p-6">
      <div className="mb-2 text-amber-400">★★★★★</div>
      <p className="text-slate-600 dark:text-slate-300">“{text}”</p>
      <p className="mt-4 font-semibold text-electric-500">— {name}</p>
    </div>
  )
}
