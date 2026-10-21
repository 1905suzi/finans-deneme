// ============================================================
// FINANS+ 2026 - Finansal Eğitim Müfredatı & Seviye Veri Bankası
// ============================================================

const financeExams = [
  {
    question: "Aylık gelirinizin yüzde kaçını temel ihtiyaçlara, isteklerinize ve birikime ayırmayı öneren ünlü kural hangisidir?",
    options: ["70 / 20 / 10 Kuralı", "50 / 30 / 20 Kuralı", "40 / 40 / 20 Kuralı", "80 / 10 / 10 Kuralı"],
    correctIndex: 1,
    explanation: "50/30/20 kuralına göre: %50 Temel İhtiyaçlar, %30 İstekler/Sosyal, %20 Tasarruf/Yatırıma ayrılır."
  },
  {
    question: "Enflasyonun %50 olduğu bir ortamda, paranız bankada %35 faizde durursa reel (gerçek) getiri ne olur?",
    options: ["Paranız %35 büyür", "Alım gücünüz erir (Negatif reel getiri)", "Reel getiri sıfırdır", "Paranız %15 değer kazanır"],
    correctIndex: 1,
    explanation: "Faiz oranı enflasyonun altındaysa alım gücünüz düşer; buna negatif reel getiri denir."
  },
  {
    question: "Bir şirketin F/K (Fiyat/Kazanç) oranı 5 ise bu ne anlama gelir?",
    options: [
      "Şirket hisse başına kazancının 5 katı fiyattan işlem görmektedir",
      "Şirket 5 yıl sonra iflas edecektir",
      "Şirket hissedarlarına yılda 5 kez temettü öder",
      "Şirketin borcu özkaynaklarının 5 katıdır"
    ],
    correctIndex: 0,
    explanation: "F/K, bir şirketin piyasa değerinin yıllık net kârına oranıdır; şirket mevcut kârıyla piyasa değerini kaç yılda amorti eder sorusuna yanıt verir."
  },
  {
    question: "Finansal dünyada 'Acil Durum Fonu' genellikle kaç aylık zorunlu gideri karşılayacak büyüklükte tutulmalıdır?",
    options: ["1 hafta", "3 ila 6 aylık gider", "10 yıllık gelir", "Yalnızca 1 kira bedeli"],
    correctIndex: 1,
    explanation: "Beklenmedik iş kaybı veya sağlık sorunlarında borçlanmamak için 3-6 aylık zorunlu gider likit tutulmalıdır."
  },
  {
    question: "Albert Einstein'ın 'Dünyanın 8. Harikası' olarak adlandırdığı finansal kavram hangisidir?",
    options: ["Bileşik Faiz / Bileşik Getiri", "Kripto Madenciliği", "Kredili Hisse Alımı", "Kısa Pozisyon (Short)"],
    correctIndex: 0,
    explanation: "Bileşik getiri, anaparanın ve kazanılan getirilerin de tekrar getiri üretmesiyle katlanarak büyüyen güçtür."
  },
  {
    question: "Hangi yatırım aracı bir şirketin kârından pay alma (temettü) ve genel kurullarda oy kullanma hakkı verir?",
    options: ["Hazine Bonosu", "Hisse Senedi (Pay)", "Mevduat Hesabı", "Altın Fonu"],
    correctIndex: 1,
    explanation: "Hisse senedi aldığınızda şirketin ortaklarından biri olur, kârdan pay (temettü) alabilir ve büyümesine ortak olursunuz."
  },
  {
    question: "'Tüm yumurtaları aynı sepete koymamak' finans literatüründe hangi temel stratejiyi ifade eder?",
    options: ["Kaldıraçlı İşlem", "Portföy Çeşitlendirmesi (Diversification)", "Gün İçi Al-Sat (Day Trading)", "HODL Stratejisi"],
    correctIndex: 1,
    explanation: "Portföy çeşitlendirmesi, riski hisse, altın, fon ve nakit gibi farklı varlıklara dağıtarak toplam riski azaltma yöntemidir."
  },
  {
    question: "Türkiye'de yatırım fonlarının şeffafça incelenip tüm bankalardan alınıp satılabildiği merkezi platformun adı nedir?",
    options: ["BIST 100", "TEFAS (Türkiye Elektronik Fon Dağıtım Platformu)", "SPK Portalı", "TCMB Takas"],
    correctIndex: 1,
    explanation: "TEFAS sayesinde bir banka veya aracı kurum hesabı üzerinden diğer tüm kurumların fonlarına erişebilirsiniz."
  },
  {
    question: "Bitcoin ve kripto para piyasalarında 'Soğuk Cüzdan (Cold Wallet)' kullanmanın temel avantajı nedir?",
    options: [
      "Faiz oranını iki katına çıkarmak",
      "İnternetten izole olarak siber saldırılara ve borsa batıklarına karşı en üst düzey güvenlik sağlamak",
      "İşlem ücretlerini tamamen sıfırlamak",
      "Kriptoların değerini sabitlemek"
    ],
    correctIndex: 1,
    explanation: "Soğuk donanım cüzdanları özel anahtarları (private keys) internete bağlı olmadan sakladığı için borsa iflaslarından ve siber korsanlardan etkilenmez."
  },
  {
    question: "Hangisi 'İyi Borç' (Kaldıraçlı Varlık) kavramına en uygun örnektir?",
    options: [
      "Taksitle lüks tatil satın almak",
      "Kendi kendine taksidini ödeyen ve kira getirisi sağlayan bir dükkan için uygun maliyetli kredi kullanmak",
      "Kredi kartıyla günlük lüks harcamalar yapmak",
      "Arkadaşlara borç vermek için nakit avans çekmek"
    ],
    correctIndex: 1,
    explanation: "İyi borç, değeri artan ve düzenli nakit akışı getiren üretken varlıkları satın almak için kullanılan kontrollü borçtur."
  }
];

const financeModules = {
  budget: {
    name: "Bütçe & Tasarruf",
    badge: "Temel Finans",
    icon: "fa-wallet",
    color: "#10b981",
    desc: "Gelir-gider dengesi, nakit akışı, acil durum fonu ve harcama kontrolü."
  },
  stock: {
    name: "Borsa & Hisse",
    badge: "Hisse Senedi",
    icon: "fa-chart-line",
    color: "#38bdf8",
    desc: "BIST, temettü, F/K oranı, şirket ortaklığı, temel ve teknik analiz temelleri."
  },
  banking: {
    name: "Faiz & Enflasyon",
    badge: "Makroekonomi",
    icon: "fa-building-columns",
    color: "#f59e0b",
    desc: "Bileşik getiri sihri, reel getiri hesabı, para piyasası ve tahvil dinamikleri."
  },
  crypto: {
    name: "Kripto & Web3",
    badge: "Dijital Varlık",
    icon: "fa-coins",
    color: "#a855f7",
    desc: "Blockchain teknolojisi, Bitcoin, Ethereum, risk yönetimi ve cüzdan güvenliği."
  },
  funds: {
    name: "Fonlar & Portföy",
    badge: "Varlık Yönetimi",
    icon: "fa-chart-pie",
    color: "#ec4899",
    desc: "TEFAS yatırım fonları, altın/emtia, sepet stratejisi ve finansal özgürlük."
  }
};

const financeUnitsByModule = {
  budget: {
    1: { title: "Bütçe ve Nakit Akışı", desc: "Gelir-gider dengesini kur ve harcama sızıntılarını kapat.", badgeClass: "banner-budget" },
    2: { title: "Acil Durum Fonu & Borç Yönetimi", desc: "Finansal şoklara karşı çelik kalkan oluştur.", badgeClass: "banner-budget" },
    3: { title: "Finansal Disiplin & Tasarruf Optimizasyonu", desc: "Alışkanlıkları kâra dönüştür ve yatırım sermayesi üret.", badgeClass: "banner-budget" }
  },
  stock: {
    1: { title: "Hisse Senetleri & Şirket Ortaklığı", desc: "Borsanın mantığı, pay sahipliği ve haklar.", badgeClass: "banner-stock" },
    2: { title: "Değerleme: F/K, PD/DD ve Temettü", desc: "Pahalı ve ucuz şirketleri ayırt etme sanatı.", badgeClass: "banner-stock" },
    3: { title: "Portföy İnşası & Risk Stratejileri", desc: "Dalgalanmalarda sakin kalma ve büyüme portföyü.", badgeClass: "banner-stock" }
  },
  banking: {
    1: { title: "Enflasyon ve Paranın Zaman Değeri", desc: "Alım gücünün korunması ve enflasyon canavarı.", badgeClass: "banner-banking" },
    2: { title: "Bileşik Getirinin Çarpan Gücü", desc: "Zamandan ve sabırdan servet yaratma mekanizması.", badgeClass: "banner-banking" },
    3: { title: "Merkez Bankaları & Faiz Döngüleri", desc: "Para politikası, tahviller ve piyasa döngüleri.", badgeClass: "banner-banking" }
  },
  crypto: {
    1: { title: "Blockchain & Bitcoin Temelleri", desc: "Merkeziyetsiz para, sınırlı arz ve madencilik mantığı.", badgeClass: "banner-crypto" },
    2: { title: "Altcoinler, Akıllı Sözleşmeler & DeFi", desc: "Ethereum, staking ve merkeziyetsiz finans araçları.", badgeClass: "banner-crypto" },
    3: { title: "Kriptoda Güvenlik & Risk Yönetimi", desc: "Soğuk cüzdanlar, dolandırıcılık tespiti ve volatilite.", badgeClass: "banner-crypto" }
  },
  funds: {
    1: { title: "Yatırım Fonları & TEFAS Dünyası", desc: "Profesyonel yöneticilerin gücünden faydalan.", badgeClass: "banner-funds" },
    2: { title: "Emtia: Altın, Gümüş ve Güvenli Limanlar", desc: "Kriz dönemlerinde portföy sigortası oluşturma.", badgeClass: "banner-funds" },
    3: { title: "Finansal Özgürlük & Pasif Gelir Yolculuğu", desc: "Çalışmadan nakit akışı üreten ideal varlık dağılımı.", badgeClass: "banner-funds" }
  }
};

const financeCoursesByModule = {
  budget: [
    {
      id: 1,
      unit: 1,
      title: "1. Finansal Farkındalık & Net Varlık Hesabı",
      desc: "Nerede olduğunu bilmeden nereye gideceğini seçemezsin.",
      theory: "Kişisel finansın başlangıç noktası 'Net Varlık' (Net Worth) değerinizi hesaplamaktır. Net Varlık = Toplam Varlıklarınız (Nakit, Banka, Yatırım, Gayrimenkul) eksi Toplam Borçlarınız (Kredi, Kredi Kartı, Taksitler). Net varlığınızın pozitif ve aydan aya artıyor olması finansal sağlığınızın en temel göstergesidir.",
      caseStudy: "Örnek Vaka: Ahmet'in bankada 45.000 TL nakdi ve 15.000 TL değerinde hissesi var. Ancak 35.000 TL kredi kartı borcu ve 10.000 TL ihtiyaç kredisi taksiti bulunuyor. Ahmet'in Net Varlığı = (45.000 + 15.000) - (35.000 + 10.000) = +15.000 TL'dir.",
      formula: "Net Varlık = Varlıklar Toplamı - Yükümlülükler (Borçlar)",
      simType: "networth",
      quiz: {
        question: "Bir kişinin 120.000 TL birikimi, 80.000 TL kredi borcu varsa Net Varlığı ne kadardır?",
        options: ["+200.000 TL", "+40.000 TL", "-40.000 TL", "+120.000 TL"],
        correctIndex: 1
      }
    },
    {
      id: 2,
      unit: 1,
      title: "2. 50/30/20 Bütçe Kuralı ile Gelir Yönetimi",
      desc: "Gelirinizi kontrol altına alan altın kuralı uygula.",
      theory: "Senatör Elizabeth Warren tarafından popülerleştirilen 50/30/20 kuralı, aylık net gelirinizi 3 ana kategoriye ayırır: \n1) %50 Temel İhtiyaçlar (Kira, fatura, market, sağlık, asgari borç ödemeleri)\n2) %30 İstekler (Dışarıda yemek, eğlence, tatil, hobiler)\n3) %20 Tasarruf ve Yatırım (Acil durum fonu, hisse/fon alımı, ek borç kapatma).",
      caseStudy: "Örnek Vaka: Aylık 30.000 TL net kazanan Zeynep; 15.000 TL'sini kira ve zorunlu giderlerine, 9.000 TL'sini sosyal yaşama ayırırken her ay aksatmadan 6.000 TL'sini yatırıma aktararak yılda 72.000 TL sermaye biriktirir.",
      formula: "İhtiyaçlar: %50 | İstekler: %30 | Yatırım/Birikim: %20",
      simType: "budget_rule",
      quiz: {
        question: "50/30/20 kuralına göre aylık 40.000 TL geliri olan biri yatırıma ve birikime en az kaç TL ayırmalıdır?",
        options: ["4.000 TL", "8.000 TL", "12.000 TL", "20.000 TL"],
        correctIndex: 1
      }
    },
    {
      id: 3,
      unit: 1,
      title: "3. Nakit Akışı Takibi & Görünmez Sızıntılar",
      desc: "Küçük sızıntılar büyük gemileri batırır.",
      theory: "Her gün harcanan küçük miktarlar (her gün alınan 120 TL'lik kahve veya kullanılmayan dijital abonelikler) yılda on binlerce liralık bir yatırım potansiyelini yok eder. Nakit akışı takibi, her kuruşun nereye gittiğini bilerek bilinçsiz harcamaları durdurmayı sağlar.",
      caseStudy: "Örnek Vaka: Günde 100 TL gereksiz harcamayı kesen bir yatırımcı, ayda 3.000 TL'yi yıllık %30 bileşik getiriyle yatırıma yönlendirirse 5 yılda 300.000 TL'den fazla ek servet oluşturur.",
      formula: "Aylık Sızıntı = Günlük Önemsiz Harcama x 30 Gün",
      simType: "leak_calc",
      quiz: {
        question: "Günde 150 TL gereksiz harcama yapan birinin 1 yılda yatırıma dönüştüremediği toplam para yaklaşık ne kadardır?",
        options: ["18.000 TL", "54.750 TL", "27.500 TL", "80.000 TL"],
        correctIndex: 1
      }
    },
    {
      id: 4,
      unit: 2,
      title: "4. Acil Durum Fonu (Finansal Hava Yastığı)",
      desc: "Hayat beklenmedik sürprizlerle doludur; hazırlıklı ol.",
      theory: "Acil durum fonu, beklenmedik sağlık sorunları, işsizlik veya acil tamir masrafları karşısında yüksek faizli kredi çekmenizi veya hisselerinizi zararına satmanızı engelleyen nakit kalkanıdır. Bu fon 3 ila 6 aylık zorunlu gider tutarında olmalı ve para piyasası fonu gibi anında nakde çevrilebilir düşük riskli araçlarda tutulmalıdır.",
      caseStudy: "Örnek Vaka: Aylık zorunlu gideri 20.000 TL olan bir çalışan için 4 aylık acil durum fonu 80.000 TL'dir. İşten ayrılsa dahi 4 ay boyunca panik yapmadan yeni iş arayabilir.",
      formula: "Acil Durum Fonu = Aylık Sabit Zorunlu Gider x (3 ila 6 Ay)",
      simType: "emergency_calc",
      quiz: {
        question: "Aylık temel yaşam masrafı 25.000 TL olan birinin 6 aylık güvenli acil durum fonu ne kadar olmalıdır?",
        options: ["75.000 TL", "100.000 TL", "150.000 TL", "200.000 TL"],
        correctIndex: 2
      }
    },
    {
      id: 5,
      unit: 2,
      title: "5. Borç Kapatma Stratejileri: Kartopu vs Çığ Yöntemi",
      desc: "Borçlardan matematiksel ve psikolojik olarak kurtulma sanatı.",
      theory: "Borçlardan kurtulmak için iki kanıtlanmış metot vardır:\n1) Çığ Yöntemi (Avalanche): En yüksek faiz oranına sahip borca odaklanılır. Matematiksel olarak en az faizi ödetir.\n2) Kartopu Yöntemi (Snowball): Faizine bakılmaksızın tutarı en küçük olan borç kapatılır. Hızlı zaferlerle yüksek motivasyon ve psikolojik rahatlama sağlar.",
      caseStudy: "Örnek Vaka: %60 faizli 10.000 TL kart borcu ve %40 faizli 50.000 TL kredi varsa; Çığ yöntemi %60 faizliyi hızla kapatmayı emreder.",
      formula: "Öncelik Sırası: En Yüksek Faiz (Çığ) VEYA En Düşük Bakiye (Kartopu)",
      simType: "debt_strategy",
      quiz: {
        question: "Faiz oranı en yüksek olan borca öncelik vererek en az toplam faiz ödemeyi amaçlayan borç kapatma stratejisi hangisidir?",
        options: ["Kartopu Yöntemi", "Çığ (Avalanche) Yöntemi", "Yapılandırma Yöntemi", "Kaldıraç Yöntemi"],
        correctIndex: 1
      }
    },
    {
      id: 6,
      unit: 2,
      title: "6. Kredi Notu (Findeks) & Finansal İtibar",
      desc: "Finans kuruluşlarının gözünde güvenilirlik puanın.",
      theory: "Kredi notu, geçmiş borç ödeme alışkanlıklarınızı, kredi kartı limit kullanım oranınızı ve borçluluk durumunuzu ölçen 1 ila 1900 arası bir puandır. Düzenli ödemeler, limitlerin %50'sinden azının kullanılması ve zamanında ödeme puanınızı hızla yükseltir.",
      caseStudy: "Örnek Vaka: 1750 kredi notuna sahip bir girişimci, düşük faizli yatırım kredisine kolayca erişebilirken; notu 1100 olan biri acil ihtiyaç anında kredi bulamaz.",
      formula: "Skor Aralığı: 1 (En Riskli) - 1900 (En Güvenilir / Çok İyi)",
      simType: "credit_score",
      quiz: {
        question: "Findeks kredi notunu en hızlı ve olumlu yönde yükselten eylem hangisidir?",
        options: [
          "Kredi kartı limitini son kuruşuna kadar doldurmak",
          "Kredi ve kredi kartı ekstrelerini son ödeme gününden önce eksiksiz ödemek",
          "Hiçbir banka hesabına sahip olmamak",
          "Her hafta farklı bir bankaya kredi başvurusu yapmak"
        ],
        correctIndex: 1
      }
    },
    {
      id: 7,
      unit: 3,
      title: "7. İstek ile İhtiyaç Ayrımı (48 Saat Kuralı)",
      desc: "Dürtüsel harcamaların önüne geçerek bütçeni koru.",
      theory: "Dürtüsel alışveriş (impulse buying), bütçelerin en büyük düşmanıdır. 48 Saat Kuralı, zorunlu olmayan bir eşyayı satın almak istediğinizde kendinize 48 saat düşünme süresi vermenizdir. Bu sürenin sonunda çoğu zaman isteğin dopamin kaynaklı geçici bir heves olduğu anlaşılır ve harcama iptal edilir.",
      caseStudy: "Örnek Vaka: 6.000 TL'lik bir akıllı saati anlık hevesle almaktan vazgeçip 48 saat bekleyen Can, saatin mevcut saatinden farksız olduğunu fark ederek 6.000 TL'yi hisse senedi birikimine aktardı.",
      formula: "Dürtüsel İstek + 48 Saat Bekleme = Bilinçli Finansal Karar",
      simType: "delay_decision",
      quiz: {
        question: "48 Saat Kuralının kişisel finans yönetimindeki birincil amacı nedir?",
        options: [
          "Fiyatın indirime girmesini beklemek",
          "Dürtüsel ve geçici heves kaynaklı harcamaları engelleyerek bütçeyi korumak",
          "Bankadan kredi onayını beklemek",
          "Ürünün stoklarının tükenmesini sağlamak"
        ],
        correctIndex: 1
      }
    },
    {
      id: 8,
      unit: 3,
      title: "8. Sabit ve Değişken Giderlerin Optimizasyonu",
      desc: "Faturalar, kira ve abonelikleri akıllıca dengele.",
      theory: "Giderler ikiye ayrılır: Sabit Giderler (Kira, aidat, internet - her ay aynı veya benzer tutar) ve Değişken Giderler (Yeme-içme, giyim, eğlence, yakıt). Tasarrufa başlarken önce sabit abonelikleri sadeleştirmek, ardından değişken kalemlerde tavan limit belirlemek gerekir.",
      caseStudy: "Örnek Vaka: Kullanmadığı 3 spor ve dizi platformu üyeliğini iptal eden (aylık 750 TL) ve evde yemek pişirme sıklığını artıran (aylık 3.000 TL) Burak, aylık 3.750 TL tasarruf marjı üretti.",
      formula: "Toplam Gider = Sabit Masraflar + Kontrol Edilebilir Değişken Masraflar",
      simType: "expense_opt",
      quiz: {
        question: "Aşağıdakilerden hangisi doğrudan bir 'Sabit Gider' örneğidir?",
        options: ["Kira / Ev Taksiti", "Hafta sonu restoran harcaması", "Tatil alışverişi", "Hobi kursu masrafı"],
        correctIndex: 0
      }
    },
    {
      id: 9,
      unit: 3,
      title: "9. Önce Kendine Öde (Pay Yourself First) Prensibi",
      desc: "Zenginlerin uyguladığı 1 numaralı para alışkanlığı.",
      theory: "Çoğu insan 'Maaşımdan harcarım, ay sonu ne kalırsa biriktiririm' der ve genellikle ay sonunda geriye hiçbir şey kalmaz. 'Önce Kendine Öde' prensibinde ise maaş yattığı ilk gün belirlenen tasarruf/yatırım miktarı (örneğin %20) doğrudan yatırım hesabına aktarılır; kalan parayla ay geçirilir.",
      caseStudy: "Örnek Vaka: Ay sonunda kalanla biriktirmeye çalışan Murat yılda 10.000 TL biriktiremezken; maaşı yatar yatmaz 5.000 TL'yi altın fonuna atan Selim yılda 60.000 TL + fon getirisi biriktirdi.",
      formula: "Harcamadan Kalanı Değil; Tasarruftan Kalanı Harca!",
      simType: "pay_yourself",
      quiz: {
        question: "'Önce Kendine Öde' felsefesinin temel uygulama adımı nedir?",
        options: [
          "Maaş yatar yatmaz lüks bir hediye almak",
          "Gelir elde edilir edilmez harcamalar başlamadan önce belirlenen yatırım tutarını birikim hesabına aktarmak",
          "Tüm parayı nakit olarak çekip evde saklamak",
          "Kredi kartı limitini artırmak"
        ],
        correctIndex: 1
      }
    },
    {
      id: 10,
      unit: 3,
      title: "10. MİNİ PROJE: Kişisel Finansal Özgürlük Bütçesi",
      desc: "Tüm bütçe ilkelerini birleştirerek kendi interaktif finansal planını tamamla.",
      theory: "Tebrikler! Bütçe ve Tasarruf modülünün zirvesine ulaştın. Gerçek bir finansal planlama; net varlık analizi, 50/30/20 dağılımı, acil durum kalkanı ve 'Önce Kendine Öde' kuralının senkronize çalışmasıyla kurulur.",
      caseStudy: "Simülasyon Görevi: Aylık 50.000 TL gelir için 50/30/20 kuralına uygun dağılımı yapın, 4 aylık acil durum fonu hedefini belirleyin ve aylık yatırım miktarını hesaplayın.",
      formula: "Mükemmel Bütçe = Dengeli Nakit Akışı + Güçlü Acil Fonu + Sürekli Yatırım",
      simType: "mini_budget_project",
      quiz: {
        question: "50.000 TL aylık geliri olan ve 4 aylık acil durum fonu oluşturmak isteyen birinin aylık acil durum fonu hedefi (aylık zorunlu gider 25.000 TL ise) toplam kaç TL'dir?",
        options: ["50.000 TL", "100.000 TL", "150.000 TL", "200.000 TL"],
        correctIndex: 1
      }
    }
  ],

  stock: [
    {
      id: 1,
      unit: 1,
      title: "1. Hisse Senedi Nedir? Şirket Ortaklığı Felsefesi",
      desc: "Hisse bir piyango bileti değil, gerçek bir şirketin tapusudur.",
      theory: "Bir hisse senedi satın aldığınızda, o şirketin fabrikalarına, patentlerine, çalışanlarının ürettiği kâra ve gelecekteki büyümesine ortak olursunuz. Fiyatların anlık inip çıkması piyasa psikolojisidir; uzun vadede hisse fiyatı şirketin kârlılığını ve büyümesini takip eder.",
      caseStudy: "Örnek Vaka: Tüpraş veya Aselsan hissesi alan bir yatırımcı, Türkiye'nin en büyük sanayi tesislerinin ve teknolojilerinin kâr paydaşı haline gelir.",
      formula: "Hisse Değeri = Şirketin Gelecekteki Nakit Akışlarının Bugünkü Değeri",
      simType: "stock_share",
      quiz: {
        question: "Bir şirketin hisse senedini aldığınızda yasal olarak ne elde etmiş olursunuz?",
        options: [
          "Şirkete geri ödenmek üzere borç vermiş olursunuz",
          "Şirketin kârına, mal varlığına ve geleceğine belirli oranda ortak olursunuz",
          "Şirketin tüm borçlarından şahsen sorumlu olursunuz",
          "Şirkette zorunlu olarak mesai yapma hakkı kazanırsınız"
        ],
        correctIndex: 1
      }
    },
    {
      id: 2,
      unit: 1,
      title: "2. Temettü (Kâr Payı) ile Pasif Gelir İnşası",
      desc: "Uyurken hesabınıza yatan şirket kârları.",
      theory: "Temettü, bir şirketin yıl boyunca elde ettiği net kârın bir kısmını hissedarlarına nakit veya hisse olarak dağıtmasıdır. Düzenli ve artan temettü ödeyen şirketlere yatırım yapmak (Temettü Emekliliği), hisseleri hiç satmadan düzenli maaş gibi pasif nakit akışı sağlar.",
      caseStudy: "Örnek Vaka: Portföyünde 500.000 TL değerinde temettü verimi %8 olan hisseler bulunan yatırımcı, yılda 40.000 TL net nakit temettü alır ve bunu yeniden hisseye yatırarak çarpan etkisini başlatır.",
      formula: "Temettü Verimi (%) = (Hisse Başına Ödenen Temettü / Güncel Hisse Fiyatı) x 100",
      simType: "dividend_calc",
      quiz: {
        question: "Hissesi 100 TL olan bir şirket hisse başına net 8 TL kâr payı dağıtırsa, temettü verimi yüzde kaçtır?",
        options: ["%0.8", "%4", "%8", "%12.5"],
        correctIndex: 2
      }
    },
    {
      id: 3,
      unit: 1,
      title: "3. Fiyat / Kazanç (F/K) Oranı ile Değerleme",
      desc: "Ödediğin fiyat mı, aldığın değer mi? Şirket ucuz mu pahalı mı?",
      theory: "F/K (P/E) oranı, bir şirketin piyasa değerinin yıllık net kârına oranıdır. Şirket mevcut kârıyla piyasa değerini kaç yılda geri öder sorusunun yanıtıdır. Genellikle düşük F/K şirketin ucuz olduğunu, yüksek F/K ise gelecekte yüksek büyüme beklendiğini gösterir.",
      caseStudy: "Örnek Vaka: A Şirketinin hissesi 50 TL, hisse başı kârı 10 TL ise F/K = 5'tir. B Şirketinin hissesi 100 TL, hisse başı kârı 2 TL ise F/K = 50'dir. Sektör ortalaması 10 ise A Şirketi cazip bir değer fırsatı sunabilir.",
      formula: "F/K Oranı = Hisse Fiyatı / Hisse Başına Net Kâr",
      simType: "pe_calc",
      quiz: {
        question: "Hisse fiyatı 120 TL olan ve hisse başına yıllık 15 TL net kâr açıklayan bir şirketin F/K oranı kaçtır?",
        options: ["6", "8", "10", "15"],
        correctIndex: 1
      }
    },
    {
      id: 4,
      unit: 2,
      title: "4. PD/DD (Piyasa Değeri / Defter Değeri) Analizi",
      desc: "Şirketin özkaynaklarına göre fiyatının tespiti.",
      theory: "PD/DD oranı, şirketin borsadaki toplam piyasa değerini, bilançosundaki özkaynaklarına (net mal varlığına) böler. PD/DD = 1 olması şirketin tam özkaynak değerinde işlem gördüğünü; 1'in altı şirketin defter değerinden bile iskontolu satıldığını gösterebilir.",
      caseStudy: "Örnek Vaka: Sanayi şirketlerinde PD/DD oranının 1.5'in altında olması genellikle defansif ve güçlü bir mali yapıya işaret ederken, teknoloji şirketlerinde yüksek büyüme nedeniyle bu oran daha yüksek seyredebilir.",
      formula: "PD/DD = Piyasa Değeri / Defter Değeri (Özkaynaklar)",
      simType: "pb_calc",
      quiz: {
        question: "Bir şirketin özkaynakları (defter değeri) 100 Milyon TL, borsadaki toplam piyasa değeri 150 Milyon TL ise PD/DD oranı nedir?",
        options: ["0.67", "1.00", "1.50", "2.50"],
        correctIndex: 2
      }
    },
    {
      id: 5,
      unit: 2,
      title: "5. Borsa Endeksleri: BIST 100 & BIST 30 Mantığı",
      desc: "Türkiye'nin lokomotif şirketlerinin göstergesi.",
      theory: "Borsa İstanbul'daki BIST 100 endeksi, işlem hacmi ve piyasa değeri en yüksek 100 büyük Türk şirketinin ağırlıklı performansını ölçer. BIST 30 ise en likit ve devasa 30 şirketi kapsar. Endeksler genel piyasanın yönünü ve ekonomik nabzı gösterir.",
      caseStudy: "Örnek Vaka: BIST 100 bir günde %2 yükseldiğinde, ortalama olarak endekse dahil şirketlerin değer kazandığı anlaşılır.",
      formula: "Endeks Değeri = Σ (Hisse Fiyatı x Dolaşımdaki Pay Sayısı) / Baz Bölen",
      simType: "bist_index",
      quiz: {
        question: "Borsa İstanbul'un piyasa değeri ve işlem hacmi en yüksek 100 şirketinin performansını takip eden gösterge endeks hangisidir?",
        options: ["BIST 30", "BIST 100", "BIST TÜM", "BIST TEMETTÜ 25"],
        correctIndex: 1
      }
    },
    {
      id: 6,
      unit: 2,
      title: "6. Dolar Maliyet Ortalaması (DCA Stratejisi)",
      desc: "Piyasanın tepesini ve dibini tahmin etmeye çalışma; düzenli al.",
      theory: "Dollar-Cost Averaging (DCA), piyasa ister yükselsin ister düşsün her ay sabit bir tutarla (örneğin her ayın 15'inde 3.000 TL) hisse almaktır. Fiyat yüksekken daha az adet, fiyat düştüğünde ise otomatikman daha çok adet hisse alınarak ortalama maliyet mükemmel bir şekilde düşürülür.",
      caseStudy: "Örnek Vaka: Fiyatı 100 TL iken 10 adet (1.000 TL), 50 TL'ye düştüğünde 20 adet (1.000 TL) alan birinin ortalama maliyeti 75 TL değil, 2.000 TL / 30 adet = 66.6 TL olur!",
      formula: "Ortalama Maliyet = Toplam Harcanan Para / Toplam Alınan Adet",
      simType: "dca_sim",
      quiz: {
        question: "Her ay düzenli olarak sabit bütçeyle hisse alarak fiyat dalgalanmalarından lehte faydalanmayı sağlayan stratejiye ne ad verilir?",
        options: ["Kaldıraçlı Arbitraj", "Dolar Maliyet Ortalaması (DCA)", "Kısa Pozisyon (Short)", "Panik Satışı"],
        correctIndex: 1
      }
    },
    {
      id: 7,
      unit: 3,
      title: "7. Zararı Kes (Stop-Loss) ve Risk Yönetimi",
      desc: "Küçük zararları kabullen, büyük felaketlerden korun.",
      theory: "Stop-Loss emri, hisse fiyatı belirlediğiniz bir seviyenin altına düştüğünde pozisyonun otomatik olarak satılmasıdır. Amacı duyguları devre dışı bırakarak portföyü telafisi imkansız devasa çöküşlerden korumaktır. Profesyonel yatırımcılar tek bir işlemde toplam sermayelerinin %1-2'sinden fazlasını riske atmaz.",
      caseStudy: "Örnek Vaka: 100 TL'den hisse alan ve %7 Stop-Loss koyan yatırımcı fiyat 93 TL'ye gerilediğinde satarak çıkar. Hisse daha sonra 40 TL'ye düşse dahi sermayesinin %93'ü güvende kalır.",
      formula: "Stop-Loss Fiyatı = Giriş Fiyatı x (1 - Kabul Edilen Zarar Oranı)",
      simType: "stoploss_calc",
      quiz: {
        question: "Bir hisseyi 200 TL'den alıp %5 Stop-Loss belirleyen bir yatırımcının satış tetiklenme fiyatı kaç TL'dir?",
        options: ["180 TL", "190 TL", "195 TL", "210 TL"],
        correctIndex: 1
      }
    },
    {
      id: 8,
      unit: 3,
      title: "8. Şirket Bilançosu ve Gelir Tablosu Okuma",
      desc: "Finansal röntgeni çek: Satışlar, FAVÖK ve Net Borç.",
      theory: "Bir şirketin sağlığı 3 temel tabloda gizlidir: \n1) Bilanço (Varlıklar ve Borçlar dengesi)\n2) Gelir Tablosu (Satışlar, Maliyetler ve Net Kâr)\n3) Nakit Akım Tablosu (Operasyonlardan gelen gerçek nakit). Bir şirketin net kârı artsa bile operasyonel nakit akışı negatifse dikkatle incelenmelidir.",
      caseStudy: "Örnek Vaka: FAVÖK (Faiz, Amortisman ve Vergi Öncesi Kâr) marjı düzenli artan şirketler, esas faaliyetlerinde operasyonel olarak güçleniyor demektir.",
      formula: "FAVÖK = Esas Faaliyet Kârı + Amortisman Giderleri",
      simType: "balance_sheet",
      quiz: {
        question: "Bir şirketin operasyonel kârlılığını ölçen FAVÖK kısaltmasının açılımı nedir?",
        options: [
          "Fiyat, Alış, Vergi ve Özel Kazanç",
          "Faiz, Amortisman ve Vergi Öncesi Kâr",
          "Fon Analizi ve Verimlilik Ölçüm Katsayısı",
          "Finansal Alacak ve Varlık Özeti Kalemi"
        ],
        correctIndex: 1
      }
    },
    {
      id: 9,
      unit: 3,
      title: "9. Davranışsal Finans: Korku ve Açgözlülük Döngüsü",
      desc: "Borsada en büyük rakibin şirketler değil, kendi psikolojindir.",
      theory: "Warren Buffett'ın ünlü sözü: 'Herkes açgözlüyken korkak ol, herkes korkakken açgözlü ol.' Küçük yatırımcıların %90'ı hisseleri tavan fiyattan açgözlülükle alır, çöküşlerde ise panikle dip fiyattan satar. Başarılı yatırım duygusuz ve plana sadık kalmayı gerektirir.",
      caseStudy: "Örnek Vaka: 2020 pandemi çöküşünde herkes panikle hisselerini satarken kaliteli şirketleri toplayan sabırlı yatırımcılar takip eden 3 yılda servetlerini katlamıştır.",
      formula: "Piyasa Döngüsü: İyimserlik -> Coşku (Tepe) -> Panik -> Teslimiyet (Dip) -> Umut",
      simType: "sentiment_cycle",
      quiz: {
        question: "Warren Buffett'ın piyasa psikolojisiyle ilgili altın tavsiyesi nedir?",
        options: [
          "Herkes alırken sen de kredi çekip al",
          "Herkes açgözlüyken korkak ol, herkes korkakken açgözlü ol",
          "Hisse fiyatı düşünce hemen tüm portföyü sat",
          "Sadece en popüler sosyal medya tüyolarını takip et"
        ],
        correctIndex: 1
      }
    },
    {
      id: 10,
      unit: 3,
      title: "10. MİNİ PROJE: İdeal Hisse Portföyü Tasarımı",
      desc: "Temettü, büyüme ve defansif hisseleri dengeli bir sepetle birleştir.",
      theory: "Borsa modülünün zirvesine ulaştın! Gerçek bir borsa yatırımcısı tek bir hisseye bel bağlamaz. Güçlü bir hisse portföyü; nakit akışı için temettü devleri, sermaye artışı için büyüme (growth) hisseleri ve kriz kalkanı için defansif şirketlerin dengesiyle kurulur.",
      caseStudy: "Simülasyon Görevi: 100.000 TL sermayeyi %40 Temettü, %40 Büyüme ve %20 İhracatçı Güçlü şirketlere dağıtın; tahmini temettü ve getiri hedefini belirleyin.",
      formula: "Portföy Getirisi = Σ (Hisse Ağırlığı x Beklenen Getiri)",
      simType: "mini_stock_project",
      quiz: {
        question: "Hisse senedi portföyü oluştururken riski en aza indirmek için önerilen temel yaklaşım hangisidir?",
        options: [
          "Bütün parayı tek bir teknoloji hissesine yatırmak",
          "Farklı sektörlerden (sanayi, perakende, teknoloji, enerji) temettü ve büyüme hisselerini dengeli dağıtmak",
          "Sosyal medyada en çok konuşulan hisseyi kredili almak",
          "Her gün tüm hisseleri satıp ertesi gün yeniden almak"
        ],
        correctIndex: 1
      }
    }
  ],

  banking: [
    {
      id: 1,
      unit: 1,
      title: "1. Enflasyon Nedir? Paranın Gizli Hırsızı",
      desc: "Fiyatlar yükselmez; paranın alım gücü erir.",
      theory: "Enflasyon, mal ve hizmetlerin fiyatlarındaki genel ve sürekli artıştır. Enflasyon ortamında nakit para tutmak garantili bir zarardır. Eğer yıllık enflasyon %40 ise, bugün 10.000 TL ile aldığınız bir sepeti bir yıl sonra alabilmek için 14.000 TL'ye ihtiyacınız olacaktır.",
      caseStudy: "Örnek Vaka: Yastık altında 100.000 TL saklayan biri, %50 enflasyon olan bir yılda parasının nominal değerini korur (hâlâ 100.000 TL'si vardır) ancak reel alım gücü 66.666 TL'ye gerilemiştir.",
      formula: "Gelecekteki Fiyat = Güncel Fiyat x (1 + Enflasyon Oranı)",
      simType: "inflation_calc",
      quiz: {
        question: "Yıllık enflasyonun %60 olduğu bir ülkede bugün 500 TL olan bir market sepetinin 1 yıl sonraki tahmini maliyeti kaç TL olur?",
        options: ["600 TL", "700 TL", "800 TL", "1.000 TL"],
        correctIndex: 2
      }
    },
    {
      id: 2,
      unit: 1,
      title: "2. Nominal Faiz vs Reel Faiz Ayrımı",
      desc: "Bankanın verdiği faiz seni gerçekten zenginleştiriyor mu?",
      theory: "Nominal Faiz, bankanın tabelasında gördüğünüz orandır. Reel Faiz ise enflasyondan arındırılmış gerçek kazançtır. \nFisher Eşitliği: Reel Faiz ≈ Nominal Faiz - Enflasyon. Eğer enflasyon %45, banka mevduat faizi %40 ise; paranız reel olarak %5 eriyor demektir (Negatif Reel Faiz).",
      caseStudy: "Örnek Vaka: Nominal getiriye aldanan yatırımcılar enflasyonun altında faiz aldıklarında zenginleştiklerini sanırken zamanla alım güçlerini kaybederler.",
      formula: "Reel Faiz = ((1 + Nominal Faiz) / (1 + Enflasyon)) - 1",
      simType: "real_interest",
      quiz: {
        question: "Enflasyonun %50, mevduat faizinin %38 olduğu bir ortamda reel getiri durumu nedir?",
        options: [
          "%12 pozitif getiri vardır",
          "Negatif reel getiri vardır, alım gücü erimektedir",
          "Alım gücü tamamen sabit kalır",
          "Yatırımcı %38 zenginleşmiştir"
        ],
        correctIndex: 1
      }
    },
    {
      id: 3,
      unit: 1,
      title: "3. Bileşik Getiri (Bileşik Faiz) Sihri",
      desc: "Kartopu etkisi: Kazanılan paranın da para kazanması.",
      theory: "Basit faizde getiri sadece anapara üzerinden hesaplanır. Bileşik getiride ise her dönem kazanılan kâr anaparaya eklenir ve bir sonraki dönem daha büyük bir meblağ üzerinden kâr üretilir. Zaman uzadıkça büyüme eğrisi dikey bir rokete dönüşür.",
      caseStudy: "Örnek Vaka: 20 yaşında ayda 2.000 TL'yi %20 yıllık bileşik getiriyle yatıran biri 50 yaşına geldiğinde milyonlarca liralık devasa bir servete ulaşır.",
      formula: "Gelecek Değer = Anapara x (1 + Getiri Oranı) ^ Yıl Sayısı",
      simType: "compound_calc",
      quiz: {
        question: "10.000 TL anapara yıllık %10 bileşik faiz ile 2 yıl değerlendirilirse 2. yılın sonunda toplam kaç TL olur?",
        options: ["11.000 TL", "12.000 TL", "12.100 TL", "13.000 TL"],
        correctIndex: 2
      }
    },
    {
      id: 4,
      unit: 2,
      title: "4. 72 Kuralı ile Paranın İkiye Katlanma Süresi",
      desc: "Karmaşık hesap makineleri olmadan kafadan hesap yap.",
      theory: "72 Kuralı, bir yatırımın veya borcun değerini ikiye katlaması için kaç yıl geçmesi gerektiğini bulmanın en pratik yoludur. 72 sayısını yıllık beklenen getiri oranına bölersiniz. Örneğin yıllık %12 getiri sağlayan bir yatırım: 72 / 12 = 6 yılda kendini ikiye katlar.",
      caseStudy: "Örnek Vaka: Yıllık %24 bileşik getiri sağlayan bir fon sepeti: 72 / 24 = 3 yılda paranızı tam 2 katına çıkarır. 6 yılda 4 katına, 9 yılda 8 katına ulaşır!",
      formula: "İkiye Katlanma Yılı = 72 / Yıllık Getiri Oranı (%)",
      simType: "rule72_calc",
      quiz: {
        question: "Yıllık %18 getiri sağlayan bir yatırım portföyünün 72 kuralına göre değerini 2 katına çıkarması kaç yıl sürer?",
        options: ["2 Yıl", "4 Yıl", "6 Yıl", "8 Yıl"],
        correctIndex: 1
      }
    },
    {
      id: 5,
      unit: 2,
      title: "5. Tahvil ve Bono Dünyası: Devlet ve Şirket Borçlanması",
      desc: "Faiz getiren sabit getirili menkul kıymetler.",
      theory: "Bono (vadesi 1 yıldan kısa) ve Tahvil (vadesi 1 yıldan uzun), devletlerin veya şirketlerin borçlanmak için çıkardığı borç senetleridir. Yatırımcı devlete borç verir ve vade sonunda anaparasını ve kupon faizini geri alır. Tahvil faizleri ile tahvil fiyatları ters orantılı hareket eder.",
      caseStudy: "Örnek Vaka: Hazine Müsteşarlığı 2 yıllık %35 kupon getirili devlet tahvili ihraç ettiğinde, bu tahvili alan yatırımcı devlet garantisinde düzenli faiz geliri elde eder.",
      formula: "Tahvil Fiyatı Artarsa Getirisi Düşer (Ters Korelasyon)",
      simType: "bond_calc",
      quiz: {
        question: "Tahvil piyasasında faiz oranları yükseldiğinde mevcut sabit kuponlu tahvillerin piyasa fiyatı nasıl değişir?",
        options: ["Yükselir", "Düşer", "Değişmez", "Sıfırlanır"],
        correctIndex: 1
      }
    },
    {
      id: 6,
      unit: 2,
      title: "6. Para Piyasası Fonları & Günlük Nemalandırma",
      desc: "Nakit paranı bir gün bile boşta bekletme.",
      theory: "Para Piyasası Fonları (PPF), mevduat ve gecelik ters repo gibi en likit araçlara yatırım yapar. Hafta sonu dahil her gün faiz kazandırır ve mesai saatlerinde anında nakde çevrilebilir. Acil durum fonları ve kısa vadeli nakitler için vadesiz mevduattan kat kat üstündür.",
      caseStudy: "Örnek Vaka: 50.000 TL kira parasını vadesiz hesapta boşta bekletmek yerine ay boyunca para piyasası fonunda değerlendiren kişi, ay sonunda kira ödemesini yaparken ek gelir elde eder.",
      formula: "Günlük Getiri ≈ (Yıllık Brüt Faiz / 365) x Bakiye",
      simType: "money_market",
      quiz: {
        question: "Para piyasası fonlarının vadesiz mevduata kıyasla en belirgin avantajı nedir?",
        options: [
          "Hisse senedi gibi aşırı yüksek risk taşıması",
          "Paranın değerini enflasyona karşı korumaya yardımcı olarak hafta sonları dahil günlük getiri sağlaması ve kolayca bozulabilmesi",
          "Paranın 5 yıl boyunca kilitli kalması",
          "Sadece dövizle işlem yapılabilmesi"
        ],
        correctIndex: 1
      }
    },
    {
      id: 7,
      unit: 3,
      title: "7. Kredi Kartı Asgari Ödeme Tuzağı",
      desc: "Asgariyi ödemek borcu bitirmez; ömrünü uzatır.",
      theory: "Kredi kartının sadece asgari tutarını ödediğinizde, kalan bakiyeye aylık akdi faiz ve gecikme faizi işletilir. Bu durum borcun bileşik faizle büyümesine yol açar ve kart borcu yıllarca kapanmayan dipsiz bir kuyuya dönüşür.",
      caseStudy: "Örnek Vaka: 30.000 TL borcun sadece asgarisini ödeyen biri, 1 yılın sonunda borcunu bitiremediği gibi borcun neredeyse yarısı kadar faiz ödemiş olur.",
      formula: "Kalan Bakiye = Toplam Ekstre - Ödenen Tutar (Faiz Kalan Bakiyeye Uygulanır)",
      simType: "min_payment_trap",
      quiz: {
        question: "Kredi kartı ekstresinin sadece asgari tutarını ödemenin finansal sonucu ne olur?",
        options: [
          "Banka kalan borcu siler",
          "Kalan bakiyeye yüksek faiz işletilir ve borcun vadesi ile maliyeti katlanarak uzar",
          "Kredi notu en üst seviyeye fırlar",
          "Gelecek ay ekstre sıfır TL gelir"
        ],
        correctIndex: 1
      }
    },
    {
      id: 8,
      unit: 3,
      title: "8. Merkez Bankası Para Politikası & Politika Faizi",
      desc: "Faiz inerse ne olur, çıkarsa ne olur?",
      theory: "Merkez Bankaları (TCMB, FED, ECB) enflasyonu kontrol etmek için politika faizini kullanır:\n- Faiz Artışı: Parayı pahalılaştırır, tüketimi kısar, enflasyonu dizginler, mevduatı cazip kılar, borsayı kısa vadede baskılayabilir.\n- Faiz İndirimi: Krediyi ucuzlatır, harcamaları ve yatırımları teşvik eder, varlık fiyatlarını (gayrimenkul, hisse) canlandırır.",
      caseStudy: "Örnek Vaka: Merkez Bankası faiz artırdığında tahvil faizleri yükselir, döviz kuru baskılanır ve tüketim kredileri pahalılaşır.",
      formula: "Politika Faizi ↑ = Kredi Daralması, Tüketim ↓, Tasarruf ↑",
      simType: "central_bank",
      quiz: {
        question: "Merkez Bankası politika faizini sert biçimde artırdığında genel olarak piyasalarda hangisi beklenir?",
        options: [
          "Krediye erişim zorlaşır ve tüketim harcamaları yavaşlar",
          "Enflasyon hemen o gün ikiye katlanır",
          "Mevduat faizleri sıfıra iner",
          "Bütün bankalar kapanır"
        ],
        correctIndex: 0
      }
    },
    {
      id: 9,
      unit: 3,
      title: "9. Sabit Faizli Kredi vs Enflasyon: Borç Eritme",
      desc: "Yüksek enflasyon dönemlerinde borçlu olmak avantajlı mıdır?",
      theory: "Eğer sabit faizli uzun vadeli bir kredi (örneğin yıllık %25 maliyetli konut kredisi) kullandıysanız ve ülkede enflasyon %60 ise; geliriniz enflasyonla birlikte artarken kredi taksitiniz sabit kalır. Reel olarak borcunuz zamanla buharlaşır. Ancak bu strateji yalnızca gelir getiren üretken varlıklar için mantıklıdır.",
      caseStudy: "Örnek Vaka: 5 yıl önce aylık 5.000 TL taksitle ev alan birinin o günkü taksiti maaşının %60'ı iken, 5 yıl sonra enflasyon nedeniyle maaşı 60.000 TL'ye çıkmış ve 5.000 TL'lik taksit maaşının %8'ine düşmüştür.",
      formula: "Reel Taksit Yükü = Nominal Taksit / Kümülatif Enflasyon Katsayısı",
      simType: "debt_erosion",
      quiz: {
        question: "Yüksek enflasyon ortamında sabit taksitli uzun vadeli borç ödeyen bir kişinin reel borç yükü zaman içinde nasıl değişir?",
        options: [
          "Gelirler enflasyonla arttıkça taksitin reel alım gücü değeri küçülür ve borç hafifler",
          "Borç katlanarak imkansız hale gelir",
          "Banka borcu her ay ikiye katlar",
          "Kredi tamamen iptal edilir"
        ],
        correctIndex: 0
      }
    },
    {
      id: 10,
      unit: 3,
      title: "10. MİNİ PROJE: Enflasyon Kalkanı Strateji Planı",
      desc: "Enflasyonu yenen ve bileşik getiri üreten nakit & tahvil planı oluştur.",
      theory: "Tebrikler! Bankacılık ve Makroekonomi modülünü tamamladın. Gerçek bir finans ustası, nakdini asla boşta bırakmaz, nominal rakamlara değil reel getiriye bakar ve 72 kuralının katlama gücünü arkasına alır.",
      caseStudy: "Simülasyon Görevi: Enflasyonun %45 olduğu bir senaryoda; nakit akışını koruyacak para piyasası fonu ve tahvil dağılımını hesaplayarak reel getiriyi pozitif tutun.",
      formula: "Reel Kalkan = Enflasyonu Aşan Bileşik Getiri Portföyü",
      simType: "mini_banking_project",
      quiz: {
        question: "Enflasyondan korunmak için nakit varlıkların tutulabileceği en likit ve düşük riskli araç hangisidir?",
        options: [
          "Vadesiz mevduat hesabı",
          "Para Piyasası Yatırım Fonları (PPF)",
          "Kaldıraçlı vadeli işlemler",
          "Evde kilitli çelik kasa"
        ],
        correctIndex: 1
      }
    }
  ],

  crypto: [
    {
      id: 1,
      unit: 1,
      title: "1. Blockchain Teknolojisi ve Merkeziyetsizlik",
      desc: "Aracıları ortadan kaldıran güven protokolü.",
      theory: "Blockchain (Blokzincir), verilerin şifrelenmiş bloklar halinde birbirine bağlandığı ve binlerce bağımsız bilgisayar tarafından doğrulandığı dağıtık bir defterdir. Hiçbir tekil otorite, hükümet veya şirket bu defteri tek başına değiştiremez veya silemez.",
      caseStudy: "Örnek Vaka: Geleneksel bankacılıkta para transferi bankanın onayına ve mesai saatine bağlıyken; blokzincir üzerinde 7/24 dünyanın öbür ucuna aracısız transfer yapılabilir.",
      formula: "Blokzincir = Kriptografi + Dağıtık Konsensüs + Değiştirilemez Kayıt Defteri",
      simType: "blockchain_demo",
      quiz: {
        question: "Blokzincir teknolojisinin geleneksel merkezi veritabanlarından en temel farkı nedir?",
        options: [
          "Verilerin tek bir sunucuda toplanması",
          "Merkezi bir otoriteye ihtiyaç duymadan binlerce bağımsız düğüm (node) tarafından şeffafça doğrulanması",
          "Sadece hafta içi 09:00 - 17:00 arası çalışması",
          "Kullanıcıların gerçek adlarını zorunlu tutması"
        ],
        correctIndex: 1
      }
    },
    {
      id: 2,
      unit: 1,
      title: "2. Bitcoin: Dijital Altın ve Sınırlı Arz",
      desc: "21 Milyonluk kesin sınır: Matematiksel kıtlık.",
      theory: "Satoshi Nakamoto tarafından 2008'de yaratılan Bitcoin, toplam 21 milyon adetle sınırlandırılmış ilk merkeziyetsiz dijital para birimidir. Merkez bankalarının sınırsız para basarak para birimlerini devalüe ettiği dünyada, Bitcoin matematiksel olarak enflasyonsuz bir 'Dijital Altın' olarak kabul görür.",
      caseStudy: "Örnek Vaka: 2140 yılına kadar tüm Bitcoin'ler madencilikle çıkarılmış olacak ve asla 21.000.001. Bitcoin üretilmeyecektir.",
      formula: "Maksimum Arz = 21.000.000 BTC (Değiştirilemez Protokol Kuralı)",
      simType: "btc_scarcity",
      quiz: {
        question: "Bitcoin protokolüne göre toplamda azami kaç adet Bitcoin üretilebilir?",
        options: ["100 Milyon", "21 Milyon", "Sınırsız (İhtiyaca göre)", "1 Milyar"],
        correctIndex: 1
      }
    },
    {
      id: 3,
      unit: 1,
      title: "3. Halving (Yarılanma) ve Arz Şoku",
      desc: "Her 4 yılda bir gelen madencilik ödül kesintisi.",
      theory: "Bitcoin ağında her 210.000 blokta bir (yaklaşık her 4 yılda bir) yeni üretilen Bitcoin blok ödülü yarı yarıya düşer (Halving). Örneğin blok ödülü 50 BTC ile başladı, 25, 12.5, 6.25 oldu ve 3.125 BTC'ye indi. Talep sabit kalsa bile yeni arz azaldığı için tarihsel olarak büyük boğa piyasalarını tetiklemiştir.",
      caseStudy: "Örnek Vaka: 2012, 2016, 2020 ve 2024 halving dönemlerinin ardından piyasada oluşan arz kısıtı yeni fiyat rekorlarına zemin hazırlamıştır.",
      formula: "Yeni Blok Ödülü = Önceki Blok Ödülü / 2 (Her ~4 Yılda Bir)",
      simType: "halving_cycle",
      quiz: {
        question: "Bitcoin Halving olayı yaklaşık kaç yılda bir gerçekleşir?",
        options: ["Her yıl", "Her 2 yılda bir", "Yaklaşık her 4 yılda bir", "Her 10 yılda bir"],
        correctIndex: 2
      }
    },
    {
      id: 4,
      unit: 2,
      title: "4. Ethereum, Akıllı Sözleşmeler ve DeFi",
      desc: "Dünyanın programlanabilir bilgisayarı.",
      theory: "Bitcoin dijital paraysa, Ethereum programlanabilir finansal altyapıdır. Vitalik Buterin tarafından kurulan Ethereum, 'Akıllı Sözleşmeler' (Smart Contracts) sayesinde bankalara ihtiyaç duymadan borç alma-verme, takas ve sigorta işlemlerinin kodlarla otomatik çalışmasını (DeFi) sağlar.",
      caseStudy: "Örnek Vaka: Uniswap gibi merkeziyetsiz bir borsada (DEX), alıcı ve satıcı bir şirket veya komisyoncu olmadan akıllı sözleşme havuzları üzerinden saniyeler içinde takas yapar.",
      formula: "Akıllı Sözleşme = Eğer Koşul Gerçekleşirse (If) -> Otomatik İcra Et (Then)",
      simType: "smart_contract",
      quiz: {
        question: "Ethereum ağının Bitcoin'den en büyük teknolojik farkı ve inovasyonu nedir?",
        options: [
          "Sadece ödeme yapabilmesi",
          "Akıllı sözleşmeler (Smart Contracts) çalıştırarak merkeziyetsiz uygulamalara (DApps) zemin hazırlaması",
          "İnternet olmadan çalışması",
          "Fiziksel madeni para basması"
        ],
        correctIndex: 1
      }
    },
    {
      id: 5,
      unit: 2,
      title: "5. Sıcak Cüzdan vs Soğuk Cüzdan (Donanım Cüzdanı)",
      desc: "Not your keys, not your coins: Varlıklarının gerçek sahibi ol.",
      theory: "Kripto paralarınızı bir borsada (Binance, BtcTurk vb.) tuttuğunuzda özel anahtarlar (private keys) sizde değil borsadadır. Borsa çökerse veya dolandırıcılık olursa paranız buharlaşabilir. Soğuk donanım cüzdanları (Ledger, Trezor) ise anahtarları internetten tamamen izole donanımda saklar.",
      caseStudy: "Örnek Vaka: 2022'de dünyanın 2. büyük borsası FTX battığında parasını borsada bırakanlar her şeyini kaybetti; parasını soğuk cüzdana çekenler ise sıfır zarar gördü.",
      formula: "Güvenlik Kuralı: Özel Anahtar Kimdeyse Paranın Sahibi Odur!",
      simType: "wallet_security",
      quiz: {
        question: "Kripto dünyasındaki meşhur 'Not your keys, not your coins' deyişi neyi ifade eder?",
        options: [
          "Borsalara şifre koymanın gereksiz olduğunu",
          "Özel anahtarları (private key) elinde tutmadığınız sürece paranın gerçek sahibinin borsa olduğunu",
          "Kriptoların bankada tutulması gerektiğini",
          "Donanım cüzdanların güvensiz olduğunu"
        ],
        correctIndex: 1
      }
    },
    {
      id: 6,
      unit: 2,
      title: "6. Sabit Kripto Paralar (Stablecoin'ler) & USDT/USDC",
      desc: "Kripto dünyasındaki dijital dolar sığınağı.",
      theory: "Stablecoin'ler değeri genellikle ABD Dolarına 1:1 oranında sabitlenmiş kripto varlıklardır (Tether - USDT, Circle - USDC). Kripto piyasasındaki yüksek dalgalanmadan kaçmak, kârı realize etmek veya 7/24 hızlı transfer yapmak için kullanılırlar.",
      caseStudy: "Örnek Vaka: Bitcoin 70.000 dolara ulaştığında kârını nakde çevirmek isteyen bir yatırımcı, bankaya para çekmeden saniyeler içinde USDT'ye geçerek kazancını kilitler.",
      formula: "1 USDT / USDC ≈ 1.00 USD (Peg Oranı)",
      simType: "stablecoin_peg",
      quiz: {
        question: "USDT (Tether) veya USDC gibi sabit paraların (stablecoin) temel amacı nedir?",
        options: [
          "Fiyatının günde %50 artması",
          "Değerini genellikle 1 ABD Dolarına sabit tutarak oynaklıktan korunma ve likidite sağlama",
          "Bitcoin madenciliği yapmak",
          "Faizsiz kredi dağıtmak"
        ],
        correctIndex: 1
      }
    },
    {
      id: 7,
      unit: 3,
      title: "7. Kriptoda Risk Yönetimi ve Volatilite",
      desc: "Kaldıraçtan uzak dur, batma riskini sıfırla.",
      theory: "Kripto paralar geleneksel borsalara göre kat kat yüksek volatiliteye (oynaklık) sahiptir. Bir gecede %20-30 düşüşler normaldir. Bu nedenle: \n1) Asla borçla veya acil ihtiyaç parasıyla kripto alınmaz.\n2) Kaldıraçlı (Futures) işlemlerden uzak durulur.\n3) Toplam yatırım portföyünün %5 ila %15'inden fazlası kriptoya ayrılmaz.",
      caseStudy: "Örnek Vaka: 50x kaldıraç açan bir kullanıcı fiyatın %2 ters gitmesiyle tüm sermayesini (likidasyon) kaybederken; spot alıp cüzdanında bekleten uzun vadeli yatırımcı dalgalanmalardan etkilenmez.",
      formula: "Kaldıraçlı Risk: Fiyat Hareketi x Kaldıraç Çarpanı = Hızlı Likidasyon Riski",
      simType: "leverage_danger",
      quiz: {
        question: "Vadeli kripto işlemlerinde 20x kaldıraç kullanan bir yatırımcının sermayesinin tamamen sıfırlanması (likidasyon) için piyasanın aleyhine yüzde kaç düşmesi yeterlidir?",
        options: ["%5", "%20", "%50", "%100"],
        correctIndex: 0
      }
    },
    {
      id: 8,
      unit: 3,
      title: "8. Kripto Dolandırıcılıkları: Phishing, Rug Pull ve Sahte Airdrop",
      desc: "Dijital ormanda tuzaklara düşmeden hayatta kal.",
      theory: "Kripto dünyasında işlemler geri döndürülemez. En yaygın tuzaklar:\n- Phishing: Cüzdanınızın 12/24 kurtarma kelimesini (seed phrase) isteyen sahte siteler. (Bu kelimeleri asla hiç kimseyle paylaşmayın!)\n- Rug Pull: Anonim geliştiricilerin para toplayıp likiditeyi çekip kaçması.\n- Sahte Airdrop: Bedava coin vaadiyle cüzdana onay imzalatıp bakiyeyi boşaltmak.",
      caseStudy: "Örnek Vaka: Twitter'da 'Cüzdanını bağla, 1.000$ hediye airdrop al' linkine tıklayıp imza atan bir kullanıcının cüzdanındaki tüm token'lar saniyeler içinde çalınabilir.",
      formula: "Altın Kural: 12/24 Kurtarma Kelimeni Asla Kimseyle Paylaşma!",
      simType: "scam_detector",
      quiz: {
        question: "Kripto cüzdanınızın 12 veya 24 kelimelik gizli kurtarma ifadesini (seed phrase) kimlerle paylaşabilirsiniz?",
        options: [
          "Borsa müşteri hizmetleriyle",
          "Size airdrop vereceğini söyleyen yetkililerle",
          "HİÇ KİMSE ile (Asla hiçbir web sitesine veya kişiye verilmez)",
          "Sosyal medyadaki popüler analistlerle"
        ],
        correctIndex: 2
      }
    },
    {
      id: 9,
      unit: 3,
      title: "9. On-Chain Analiz: Balinalar ve Borsa Giriş-Çıkışları",
      desc: "Blokzincirin şeffaflığıyla büyük oyuncuları takip et.",
      theory: "Blokzincirdeki tüm işlemler herkese açıktır. Borsalara büyük miktarda Bitcoin girişi olduğunda balinaların satış yapacağı (düşüş sinyali); borsalardan soğuk cüzdanlara büyük Bitcoin çekimleri olduğunda ise kurumsalların biriktirme yaptığı (yükseliş sinyali) anlaşılabilir.",
      caseStudy: "Örnek Vaka: Borsalardaki toplam Bitcoin rezervleri tarihsel dip seviyelere indiğinde, piyasada satılacak BTC kalmadığı için genellikle güçlü bir yükseliş trendi başlar.",
      formula: "Borsalara Coin Girişi ↑ = Olası Satış Baskısı | Borsalardan Çıkış ↑ = Biriktirme",
      simType: "onchain_sim",
      quiz: {
        question: "On-Chain analizde borsalardan soğuk cüzdanlara rekor miktarda kripto çekilmesi genel olarak neye işaret eder?",
        options: [
          "Büyük yatırımcıların (balinaların) uzun vadeli biriktirme yaptığına ve satmak istemediğine",
          "Bitcoin'in yasaklandığına",
          "Madencilerin iflas ettiğine",
          "Borsaların kapandığına"
        ],
        correctIndex: 0
      }
    },
    {
      id: 10,
      unit: 3,
      title: "10. MİNİ PROJE: Güvenli Kripto Portföy ve Saklama Mimarisi",
      desc: "Spot birikim, soğuk cüzdan ve risk limitlerini birleştiren nihai plan.",
      theory: "Tebrikler! Kripto ve Web3 modülünü tamamladın. Gerçek bir kripto yatırımcısı asla kumarbaz gibi davranmaz. Güçlü bir kripto planı; %70 Bitcoin/Ethereum ağırlığı, %20 seçkin DeFi projeleri, %10 nakit/stablecoin ve soğuk cüzdan saklamasıyla inşa edilir.",
      caseStudy: "Simülasyon Görevi: 50.000 TL kripto bütçesini risk kurallarına göre dağıtın, soğuk cüzdan transfer stratejisini belirleyin ve maksimum portföy riskini %10 ile sınırlandırın.",
      formula: "Güvenli Kripto = Sağlam Varlıklar (BTC/ETH) + Soğuk Saklama + Sıfır Kaldıraç",
      simType: "mini_crypto_project",
      quiz: {
        question: "Kripto varlıklara yatırım yaparken genel finansal sağlığı korumak için toplam yatırım sepetindeki önerilen maksimum oran nedir?",
        options: ["%100 (Tüm para)", "%80", "%5 - %15 arası kontrollü pay", "%0 (Hiç alınmaz)"],
        correctIndex: 2
      }
    }
  ],

  funds: [
    {
      id: 1,
      unit: 1,
      title: "1. Yatırım Fonu Nedir? Profesyonel Portföy Yönetimi",
      desc: "Tek bir tıkla yüzlerce şirkete ve varlığa ortak ol.",
      theory: "Yatırım fonu, binlerce yatırımcının birikimlerinin bir havuzda toplanarak Sermaye Piyasası Kurulu (SPK) lisanslı profesyonel portföy yöneticileri tarafından yönetilmesidir. Fon aldığınızda hisse seçme, bilanço okuma veya piyasa takip etme zahmeti olmadan uzmanların tecrübesine ortak olursunuz.",
      caseStudy: "Örnek Vaka: Bir hisse senedi fonu aldığınızda, fonun içinde BIST'in en seçkin 40 farklı hissesi yer alır. Biri düşse bile diğeri dengeler; paranız tek bir şirketin kaderine bağlanmaz.",
      formula: "Fon Pay Fiyatı = Fon Toplam Değeri / Dolaşımdaki Pay Sayısı",
      simType: "fund_basics",
      quiz: {
        question: "Yatırım fonlarının bireysel hisse seçimine kıyasla en önemli avantajı nedir?",
        options: [
          "Garantili %100 getiri sağlaması",
          "Profesyonel uzmanlarca yönetilmesi ve riski çok sayıda varlığa dağıtarak sepet güvencesi sunması",
          "Hiçbir vergi ve komisyonun olmaması",
          "Her gün paranızı ikiye katlaması"
        ],
        correctIndex: 1
      }
    },
    {
      id: 2,
      unit: 1,
      title: "2. TEFAS Platformu: Türkiye'nin Fon Pazarı",
      desc: "Hangi bankada hesabın olursa olsun, tüm fonlara tek tıkla ulaş.",
      theory: "TEFAS (Türkiye Elektronik Fon Dağıtım Platformu), Türkiye'deki tüm banka ve aracı kurumların yatırım fonlarının serbestçe alınıp satılabildiği devrimsel bir sistemdir. X Bankasındaki hesabınızdan Y Portföy'ün teknoloji fonunu veya Z Portföy'ün altın fonunu ek bir hesap açmadan saniyeler içinde alabilirsiniz.",
      caseStudy: "Örnek Vaka: www.tefas.gov.tr adresine girerek son 1, 3 ve 5 yılda en çok kazandıran fonları, yönetim ücretlerini ve portföy dağılımlarını şeffafça inceleyebilirsiniz.",
      formula: "TEFAS = Açık Pazar + Şeffaf Karşılaştırma + Sıfır Banka Bağımlılığı",
      simType: "tefas_platform",
      quiz: {
        question: "TEFAS platformu sayesinde bir yatırımcı ne yapabilir?",
        options: [
          "Yalnızca kendi bankasının fonlarını alabilir",
          "Herhangi bir banka veya aracı kurum hesabı üzerinden diğer tüm kurumların fonlarını serbestçe alıp satabilir",
          "Yurtdışından faizsiz kredi çekebilir",
          "Şirket kurabilir"
        ],
        correctIndex: 1
      }
    },
    {
      id: 3,
      unit: 1,
      title: "3. Fon Türleri: Hisse, Değişken, Borçlanma ve Karma Fonlar",
      desc: "Risk profiline göre sana en uygun fonu seç.",
      theory: "Fonlar portföy içeriklerine göre ayrılır:\n- Hisse Yoğun Fonlar: En az %80 yerli hisse taşır (Yüksek getiri & risk).\n- Değişken / Serbest Fonlar: Piyasa şartlarına göre varlık dağılımını esnekçe değiştirir.\n- Borçlanma Araçları Fonları: Tahvil ve mevduat taşır (Düşük risk, istikrarlı getiri).\n- Kıymetli Madenler Fonu: Altın ve gümüşe endekslidir.",
      caseStudy: "Örnek Vaka: Genç ve uzun vadeli düşünen biri hisse yoğun fonlara ağırlık verirken; emekliliğe yakın veya acil para ihtiyacı olabilecek biri borçlanma fonlarını tercih eder.",
      formula: "Risk Seviyesi: 1-2 (Düşük) | 3-4 (Orta) | 5-7 (Yüksek Risk)",
      simType: "fund_types",
      quiz: {
        question: "Portföyünün en az %80'i sürekli olarak Borsa İstanbul paylarında değerlendirilen fon türü hangisidir?",
        options: [
          "Para Piyasası Fonu",
          "Hisse Senedi Yoğun Fon",
          "Kısa Vadeli Borçlanma Fonu",
          "Kira Sertifikası Fonu"
        ],
        correctIndex: 1
      }
    },
    {
      id: 4,
      unit: 2,
      title: "4. Altın ve Emtia: Portföyün Emniyet Kilidi",
      desc: "5.000 yıllık güvenli liman ve servet koruma aracı.",
      theory: "Altın, enflasyon, jeopolitik krizler ve para birimlerinin değer kaybettiği dönemlerde serveti koruyan evrensel bir değer saklama aracıdır. Hisse senetleri çökerken altın genellikle değer kazanır; bu sayede portföydeki sert kayıpları dengeler (Negatif Korelasyon).",
      caseStudy: "Örnek Vaka: 2008 küresel krizinde dünya borsaları %50 değer kaybederken altın fiyatları rekorlar kırarak yatırımcılarının toplam servetini korumuştur.",
      formula: "Gram Altın = (Ons Altın / 31.1035) x Dolar/TL Kuru",
      simType: "gold_calc",
      quiz: {
        question: "Altının bir yatırım portföyündeki birincil fonksiyonu nedir?",
        options: [
          "Şirket kurup temettü dağıtmak",
          "Jeopolitik krizlerde ve yüksek enflasyon dönemlerinde portföyü sigortalayarak alım gücünü korumak",
          "Her ay düzenli faiz ödemek",
          "Sadece takı olarak kullanılmak"
        ],
        correctIndex: 1
      }
    },
    {
      id: 5,
      unit: 2,
      title: "5. Gümüş ve Endüstriyel Emtialar",
      desc: "Yeşil dönüşümün, güneş panellerinin ve çip üretiminin vazgeçilmezi.",
      theory: "Gümüş hem kıymetli bir maden hem de endüstriyel bir hammaddedir. Güneş enerjisi panelleri, elektrikli araçlar ve tıp sektöründe vazgeçilmezdir. Altına göre piyasa büyüklüğü daha küçük olduğu için boğa piyasalarında altından çok daha hızlı yükselir (yüksek beta).",
      caseStudy: "Örnek Vaka: Altın/Gümüş oranı (Gold-Silver Ratio) tarihsel olarak 80'in üzerine çıktığında gümüş altına kıyasla aşırı ucuzlamış kabul edilir ve yatırımcıların ilgisi gümüşe kayar.",
      formula: "Altın/Gümüş Rasyosu = 1 Ons Altın Fiyatı / 1 Ons Gümüş Fiyatı",
      simType: "silver_ratio",
      quiz: {
        question: "Gümüşün altına kıyasla sanayi üretiminde (güneş panelleri, elektronik) çok daha yoğun kullanılmasının finansal sonucu nedir?",
        options: [
          "Gümüşün hiçbir zaman fiyatlanmaması",
          "Endüstriyel büyüme dönemlerinde talebinin artması ve fiyatta altına göre daha yüksek volatilite sergilemesi",
          "Gümüşün altınla tamamen aynı fiyata sahip olması",
          "Gümüşün yalnızca madeni para yapımında kullanılması"
        ],
        correctIndex: 1
      }
    },
    {
      id: 6,
      unit: 2,
      title: "6. Portföy Çeşitlendirmesi (All-Weather Portföy)",
      desc: "Her mevsimde ve her piyasa koşulunda kazanan sepet.",
      theory: "Ünlü fon yöneticisi Ray Dalio tarafından geliştirilen 'Tüm Hava Koşulları' (All-Weather) stratejisi; ekonominin 4 mevsimi (Büyüme, Durgunluk, Enflasyon, Deflasyon) için farklı varlıkları bir araya getirir. Böylece piyasa ne yaparsa yapsın portföy ağır darbeler almadan büyümeye devam eder.",
      caseStudy: "Örnek Dağılım: %30 Hisse Senedi, %40 Uzun Vadeli Tahvil, %15 Orta Vadeli Tahvil, %7.5 Altın, %7.5 Emtia. Bu dağılım son 40 yılda minimum düşüşle istikrarlı getiri üretmiştir.",
      formula: "Toplam Portföy Riski < Bileşenlerin Tekil Risklerinin Toplamı",
      simType: "all_weather",
      quiz: {
        question: "Portföy çeşitlendirmesinin (diversification) temel matematiksel mantığı nedir?",
        options: [
          "Bütün parayı tek bir en çok kazandıran hisseye koyup beklemek",
          "Farklı piyasa koşullarında birbirinin tersi yönde hareket edebilen varlıkları birleştirerek toplam riski azaltırken istikrarlı büyüme sağlamak",
          "Sadece nakitte kalmak",
          "Tüm parayı banka kredisiyle ikiye katlamak"
        ],
        correctIndex: 1
      }
    },
    {
      id: 7,
      unit: 3,
      title: "7. Portföy Yeniden Dengeleme (Rebalancing)",
      desc: "Kazananı tepe fiyattan kârla sat, ucuz kalanı topla.",
      theory: "Yılda bir veya altı ayda bir portföyünüzün hedef ağırlıklarını kontrol edersiniz. Örneğin hedefiniz %50 Hisse, %50 Altın iken hisseler ralli yapıp %70'e çıktıysa; hisselerin %20'lik kârını satıp ucuz kalan altına aktarırsınız. Bu kural sayesinde otomatik olarak pahalıyı satıp ucuzu almış olursunuz.",
      caseStudy: "Örnek Vaka: 2021'de hisse kârlarını realize edip altına geçen yatırımcı, 2022'de altın kârlarını satıp düşen teknoloji hisselerine geçerek her iki dalgadan da kâr elde etmiştir.",
      formula: "Yeniden Dengeleme: Hedef Ağırlıktan Sapan Varlığı Sat -> Geri Kalana İlave Et",
      simType: "rebalance_sim",
      quiz: {
        question: "Portföy Yeniden Dengeleme (Rebalancing) işleminin yatırımcıya kazandırdığı otomatik avantaj nedir?",
        options: [
          "Çok yükselen varlıktan kâr realize ederek nispeten ucuz kalmış varlığı dipten toplamayı kurala bağlaması",
          "Bütün vergileri tamamen sıfırlaması",
          "Hiçbir zaman hisse satmamayı garanti etmesi",
          "Banka masraflarını artırması"
        ],
        correctIndex: 0
      }
    },
    {
      id: 8,
      unit: 3,
      title: "8. Yıllık Fon Yönetim Ücreti ve Kesintilerin Önemi",
      desc: "Küçük görünen %2'lik kesinti 20 yılda servetinin %40'ını götürebilir.",
      theory: "Yatırım fonları portföyü yönetmek için yıllık %1 ila %3.5 arasında yönetim ücreti keser. Kısa vadede önemsiz gibi görünen bu oran, bileşik getirinin tersine çalışması nedeniyle 20-30 yıllık vadede toplam getirinizi devasa oranda eritebilir. Bu yüzden benzer stratejideki fonlar arasında düşük yönetim ücretli olanları tercih etmek kritik önemdedir.",
      caseStudy: "Örnek Vaka: Yıllık brüt %20 kazandıran iki fondan; biri %1 kesinti yaparken diğeri %3.5 kesinti yapıyorsa, 25 yılın sonunda aradaki servet farkı yüz binlerce lirayı bulur.",
      formula: "Net Bileşik Getiri = Brüt Getiri - Yıllık Yönetim Ücreti",
      simType: "fee_drag",
      quiz: {
        question: "Yatırım fonu seçerken yıllık fon yönetim ücretinin düşük olmasının uzun vadeli önemi nedir?",
        options: [
          "Hiçbir önemi yoktur",
          "Bileşik getirinin ters işlemesini (Fee Drag) engelleyerek uzun vadede elde kalacak net kârı ciddi oranda artırması",
          "Düşük ücretli fonların batma ihtimalinin yüksek olması",
          "Yalnızca devlet memurlarına özel olması"
        ],
        correctIndex: 1
      }
    },
    {
      id: 9,
      unit: 3,
      title: "9. Finansal Özgürlük ve %4 Kuralı (FIRE Hareketi)",
      desc: "Çalışmak zorunda olmadan kendi şartlarında yaşamak.",
      theory: "FIRE (Financial Independence, Retire Early) hareketinin kalbindeki '%4 Kuralı' (Trinity Study); yıllık zorunlu yaşam masraflarınızın 25 katı büyüklüğünde bir dengeli portföy kurduğunuzda, her yıl portföyün %4'ünü çekerek anaparayı tüketmeden ömür boyu yaşayabileceğinizi kanıtlar.",
      caseStudy: "Örnek Vaka: Yıllık tüm masrafı 240.000 TL (aylık 20.000 TL) olan birinin FIRE Hedef Portföy Büyüklüğü: 240.000 x 25 = 6.000.000 TL'dir. Bu portföye ulaştığında emekli olabilir.",
      formula: "Finansal Özgürlük Portföyü = Yıllık Yaşam Masrafı x 25",
      simType: "fire_calc",
      quiz: {
        question: "%4 Kuralına göre yılda 300.000 TL masrafı olan birinin tam finansal özgürlüğe ulaşması için gereken toplam portföy büyüklüğü yaklaşık kaç TL'dir?",
        options: ["3 Milyon TL", "7.5 Milyon TL", "12 Milyon TL", "20 Milyon TL"],
        correctIndex: 1
      }
    },
    {
      id: 10,
      unit: 3,
      title: "10. BİTİRME PROJESİ: Bütünleşik Ömür Boyu Finansal Strateji",
      desc: "Tüm finans müfredatını tek bir usta portföyde birleştir ve mezun ol!",
      theory: "Muhteşem bir başarı! Finans+ platformunun en ileri seviyesine ulaştın. Bütçe disiplini, hisse değerlemesi, enflasyon kalkanı, soğuk cüzdan kripto payı, TEFAS fonları ve altın dengesini birleştirerek kendi kişisel FIRE yol haritanı çiz.",
      caseStudy: "Büyük Simülasyon: 200.000 TL sermaye ve aylık 10.000 TL düzenli tasarruf ile 10 yıllık servet projeksiyonunu kurun. Beklenen enflasyon %30, portföy getiri hedefi %45 iken finansal özgürlük gününüzü hesaplayın.",
      formula: "Finansal Ustalık = Bilgi + Disiplin + Bileşik Getiri + Çeşitlendirilmiş Portföy",
      simType: "master_fire_project",
      quiz: {
        question: "Sürdürülebilir ve ömür boyu finansal özgürlüğün en temel sırrı hangisidir?",
        options: [
          "Bütün parayla her gün riskli işlemler yapmak",
          "Gelirinden az harcamak, bütçe disipliniyle düzenli tasarruf etmek ve bu tasarrufu çeşitlendirilmiş üretken varlıklarda bileşik getiriyle büyütmek",
          "Piyango ve şans oyunları oynamak",
          "Tüm parayı vadesiz hesapta tutmak"
        ],
        correctIndex: 1
      }
    }
  ]
};

// Global dışa aktarım
if (typeof window !== 'undefined') {
  window.financeExams = financeExams;
  window.financeModules = financeModules;
  window.financeUnitsByModule = financeUnitsByModule;
  window.financeCoursesByModule = financeCoursesByModule;
}
