import {
  BadgeCheck,
  Droplets,
  HeartPulse,
  Laser,
  Leaf,
  ScanFace,
  Sparkles,
  WandSparkles,
  ShieldCheck,
  Users,
  Flower2,
  Cpu,
  Instagram,
  Facebook,
  MessagesSquare
} from 'lucide-react';

export const navLinks = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Neden Biz', href: '#neden-biz' },
  { label: 'Öncesi / Sonrası', href: '#sonuclar' },
  { label: 'Yorumlar', href: '#yorumlar' },
  { label: 'İletişim', href: '#iletisim' }
];

export const services = [
  {
    title: 'Cilt Bakımı',
    description: 'Cildinize canlılık, denge ve ışıltı kazandıran profesyonel bakım protokolleri.',
    icon: Droplets
  },
  {
    title: 'Lazer Epilasyon',
    description: 'Konfor odaklı uygulama süreci ile pürüzsüz ve güven veren sonuçlar.',
    icon: Laser
  },
  {
    title: 'Hydrafacial',
    description: 'Arındırıcı, nemlendirici ve yenileyici çok aşamalı bakım deneyimi.',
    icon: Sparkles
  },
  {
    title: 'Bölgesel İncelme',
    description: 'Hedef odaklı seans planlamasıyla daha sıkı ve dengeli bir görünüm.',
    icon: Leaf
  },
  {
    title: 'Kaş & Kirpik Uygulamaları',
    description: 'Yüz ifadesini güçlendiren doğal ve rafine dokunuşlar.',
    icon: ScanFace
  },
  {
    title: 'Medikal Bakım',
    description: 'Uzman değerlendirmesiyle cilt ihtiyaçlarına uygun destekleyici uygulamalar.',
    icon: HeartPulse
  },
  {
    title: 'Lips • Brows • Eyeliner',
    description: 'Kalıcı makyaj uygulamalarında doğal görünümü koruyan titiz tasarım yaklaşımı.',
    icon: WandSparkles
  }
];

export const reasons = [
  {
    title: 'Uzman ekip',
    description: 'Her işlem, deneyimli uzmanlar eşliğinde kişisel ihtiyaçlara göre planlanır.',
    icon: Users
  },
  {
    title: 'Hijyenik ortam',
    description: 'Sterilizasyon ve bakım standartlarıyla güven veren bir klinik deneyimi sunarız.',
    icon: ShieldCheck
  },
  {
    title: 'Kişiye özel uygulamalar',
    description: 'Her cilt ve beklenti için özel olarak kurgulanan premium bakım süreçleri.',
    icon: Flower2
  },
  {
    title: 'Modern teknoloji',
    description: 'Güncel cihazlar ve yenilikçi tekniklerle etkili ve konforlu seanslar.',
    icon: Cpu
  }
];

export const transformations = [
  'Cilt tonu eşitleme',
  'Yoğun nem dengesi',
  'Daha pürüzsüz görünüm',
  'Canlılık ve parlaklık'
];

export const testimonials = [
  {
    name: 'Elif K.',
    quote:
      'Hem ortamın zarafeti hem de ekibin ilgisi gerçekten çok iyi. İlk seanstan itibaren kendimi güvende hissettim.'
  },
  {
    name: 'Zeynep A.',
    quote:
      'Hydrafacial sonrasında cildimdeki aydınlık fark edilir seviyedeydi. Çok temiz ve profesyonel bir klinik.'
  },
  {
    name: 'Dilan S.',
    quote:
      'Lazer epilasyon süreci boyunca her detay özenle açıklandı. Konforlu ve premium bir deneyimdi.'
  }
];

export const socialLinks = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'WhatsApp', href: 'https://wa.me/905551234567', icon: MessagesSquare }
];

export const trustItems = [
  'Premium bakım planı',
  'Modern klinik konforu',
  'Doğal ve rafine sonuçlar',
  'Kadıköy merkez lokasyon'
];

export const heroStats = [
  { value: '7+', label: 'Premium hizmet alanı' },
  { value: '100%', label: 'Kişiye özel bakım planı' },
  { value: '5★', label: 'Memnuniyet odaklı deneyim' }
];

export const contactDetails = [
  { label: 'Konum', value: 'İstanbul / Kadıköy' },
  { label: 'Telefon', value: '+90 555 123 45 67' },
  { label: 'E-posta', value: 'info@lubeautyclinic.com' }
];

export const badgeIcon = BadgeCheck;
