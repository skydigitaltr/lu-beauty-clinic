import Link from 'next/link';
import { ArrowUpRight, Check, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { HeroCanvas } from './hero-canvas';
import {
  badgeIcon,
  contactDetails,
  heroStats,
  reasons,
  services,
  socialLinks,
  testimonials,
  transformations,
  trustItems
} from './site-data';
import { PrimaryButton, SecondaryButton, SectionHeading } from './ui';

const Badge = badgeIcon;

export function HeroSection() {
  return (
    <section className="section-shell relative overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] rounded-[3rem] bg-hero-glow blur-3xl" />
      <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose/15 bg-white/75 px-4 py-2 text-sm text-taupe shadow-soft backdrop-blur">
            <Badge size={16} className="text-rose" />
            Premium klinik konforu ile kişiye özel bakım deneyimi
          </div>

          <div className="space-y-6">
            <h1 className="max-w-3xl font-display text-5xl leading-[0.95] text-ink md:text-7xl">
              Işıltınızı ortaya çıkaran premium bakım deneyimi
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-taupe md:text-xl">
              Cilt bakımı, lazer epilasyon ve profesyonel güzellik uygulamalarında modern, güvenilir ve konforlu hizmet sunuyoruz.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="#iletisim">Randevu Al</PrimaryButton>
            <SecondaryButton href="#hizmetler">Hizmetleri İncele</SecondaryButton>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-[1.75rem] border border-white/80 bg-white/70 p-5 shadow-card backdrop-blur">
                <p className="font-display text-4xl text-ink">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-taupe">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <HeroCanvas />
          <div className="grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="glass-panel rounded-3xl border border-white/70 px-5 py-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand text-ink">
                    <Check size={16} />
                  </span>
                  <p className="text-sm text-ink">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="hizmetler" className="section-shell py-20 md:py-28">
      <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Hizmetler"
          title="İhtiyacınıza özel tasarlanmış premium uygulamalar"
          description="Her bakım süreci, doğal görünümü koruyan zarif dokunuşlar ve profesyonel yaklaşım ile planlanır."
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-7 shadow-card transition duration-500 hover:-translate-y-1.5 hover:border-rose/20 hover:shadow-soft"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-sand/40 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative space-y-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sand text-ink shadow-soft">
                  <Icon size={24} />
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-3xl text-ink">{service.title}</h3>
                  <p className="text-sm leading-7 text-taupe">{service.description}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-ink/80">
                  Detayları keşfet <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  return (
    <section id="neden-biz" className="bg-white/65 py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Neden LU Beauty Clinic"
            title="Zarif detaylarla tasarlanmış güven veren bir deneyim"
            description="Premium atmosfer, ileri teknoloji ve kişiselleştirilmiş yaklaşım bir araya gelerek bakım sürecini konforlu hale getirir."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className="rounded-[2rem] border border-white/80 bg-canvas p-7 shadow-card">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-rose shadow-soft">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-3xl text-ink">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-taupe">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterSection() {
  return (
    <section id="sonuclar" className="section-shell py-20 md:py-28">
      <SectionHeading
        eyebrow="Öncesi / Sonrası"
        title="Daha canlı ve dengeli bir görünüm"
        description="Gerçek fotoğraf yerine, premium sunum estetiğini koruyan yer tutucu kartlarla sonuç hissini yansıtan bir vitrin alanı."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {transformations.map((item, index) => (
          <div key={item} className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-card">
            <div className="h-72 bg-[linear-gradient(160deg,#f8efeb_0%,#fffdfc_45%,#efe1d8_100%)] p-5">
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-dashed border-rose/20 bg-white/40 p-5">
                <div className="flex items-start justify-between text-xs uppercase tracking-[0.28em] text-taupe">
                  <span>Case {index + 1}</span>
                  <span>Placeholder</span>
                </div>
                <div>
                  <p className="font-display text-3xl text-ink">{item}</p>
                  <p className="mt-3 text-sm leading-7 text-taupe">
                    Dengeli ton, rafine görünüm ve daha bakımlı bir cilt hissi için örnek sunum kartı.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="yorumlar" className="bg-white/65 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Müşteri Yorumları"
          title="Ziyaretçilerimizin deneyimlerinden kısa notlar"
          description="Güven, konfor ve sonuç odaklı yaklaşımımızı danışanlarımızın yorumlarıyla hissedin."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[2rem] border border-white/80 bg-canvas p-7 shadow-card">
              <div className="mb-6 flex gap-1 text-rose">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={`${testimonial.name}-${index}`}>★</span>
                ))}
              </div>
              <p className="text-base leading-8 text-ink/85">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm font-medium uppercase tracking-[0.24em] text-taupe">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="section-shell py-20 md:py-28">
      <div className="overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(135deg,#fffdfc_0%,#faefea_55%,#f3e2d6_100%)] px-8 py-12 shadow-card md:px-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-rose">Randevu Oluşturun</p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
              Güzelliğinize profesyonel bir dokunuş katın
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-taupe md:text-lg">
              Size en uygun bakım sürecini birlikte planlayalım.
            </p>
          </div>
          <PrimaryButton href="#iletisim" className="w-full sm:w-auto">
            Randevu Al
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="iletisim" className="section-shell pb-16 pt-10 md:pb-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2.25rem] border border-white/80 bg-white/80 p-8 shadow-card">
          <SectionHeading
            eyebrow="İletişim"
            title="Kliniğimizle hemen iletişime geçin"
            description="Randevu talepleriniz, uygulama detayları ve size en uygun bakım planı için bizimle iletişim kurabilirsiniz."
          />

          <div className="mt-10 space-y-5">
            {contactDetails.map((item) => {
              const iconMap = {
                Konum: MapPin,
                Telefon: Phone,
                'E-posta': Mail
              } as const;
              const Icon = iconMap[item.label as keyof typeof iconMap];

              return (
                <div key={item.label} className="flex items-start gap-4 rounded-3xl bg-canvas p-5">
                  <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-sand text-ink">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-taupe">{item.label}</p>
                    <p className="mt-2 text-base text-ink">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="https://wa.me/905551234567" className="w-full sm:w-auto">
              <span className="inline-flex items-center gap-2">
                <MessageCircle size={18} /> WhatsApp
              </span>
            </PrimaryButton>
            <SecondaryButton href="mailto:info@lubeautyclinic.com" className="w-full sm:w-auto">
              E-posta Gönder
            </SecondaryButton>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.25rem] border border-white/80 bg-white shadow-card">
          <iframe
            title="LU Beauty Clinic Harita"
            src="https://www.google.com/maps?q=Kad%C4%B1k%C3%B6y%20%C4%B0stanbul&z=14&output=embed"
            loading="lazy"
            className="h-[520px] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-white/70">
      <div className="section-shell flex flex-col gap-10 py-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          <p className="font-display text-3xl text-ink">LU Beauty Clinic</p>
          <p className="mt-3 text-sm leading-7 text-taupe">
            Zarif detaylar, modern teknoloji ve premium bakım anlayışıyla güzelliğinize değer katan seçkin klinik deneyimi.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink transition hover:-translate-y-0.5 hover:border-rose/30"
                  aria-label={link.label}
                >
                  <Icon size={18} />
                </Link>
              );
            })}
          </div>
          <p className="text-sm text-taupe">© {new Date().getFullYear()} LU Beauty Clinic. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
