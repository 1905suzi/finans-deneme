// ============================================================
// FINANS+ 2026 - Dijital Finans & Yatırım El Kitabı & Sözlük Verisi
// ============================================================

const financeBookData = {
  dictionary: {
    title: "Finans & Borsa Terimleri Sözlüğü",
    desc: "A'dan Z'ye yatırım, borsa, bankacılık ve kripto dünyasının anahtar kavramları.",
    icon: "fa-book-atlas",
    items: [
      {
        term: "F/K Oranı (Fiyat / Kazanç - P/E)",
        category: "Borsa",
        def: "Bir şirketin piyasa değerinin yıllık net kârına oranıdır. Şirketin mevcut kâr temposuyla piyasa değerini kaç yılda amorti edebileceğini gösterir. Sektör ortalamasına göre düşük F/K şirketin ucuz olabileceğini, yüksek F/K ise gelecekte yüksek büyüme beklendiğini ifade eder."
      },
      {
        term: "PD/DD (Piyasa Değeri / Defter Değeri)",
        category: "Borsa",
        def: "Şirketin borsadaki toplam piyasa değerinin bilançosundaki özkaynaklara (net mal varlığına) bölünmesiyle bulunur. PD/DD = 1 ise şirket tam net varlığı değerinde fiyatlanmaktadır; 1'in altı iskontolu işlem gördüğüne işaret edebilir."
      },
      {
        term: "Temettü (Kâr Payı)",
        category: "Borsa & Pasif Gelir",
        def: "Bir şirketin yıl boyunca elde ettiği net kârın belirli bir bölümünü pay sahiplerine nakit veya bedelsiz hisse olarak dağıtmasıdır. Düzenli temettü ödeyen şirketler pasif gelir ve temettü emekliliği hedefleyen yatırımcıların gözdesidir."
      },
      {
        term: "Bileşik Getiri (Compound Interest)",
        category: "Temel Finans",
        def: "Anaparanın kazandığı getirinin de tekrar yatırıma dönüşerek yeni getiri üretmesi sürecidir. Zaman içinde katlanarak büyür; uzun vadeli servet birikiminin matematiksel temelidir."
      },
      {
        term: "Acil Durum Fonu (Emergency Fund)",
        category: "Kişisel Bütçe",
        def: "Beklenmedik iş kaybı, sağlık veya acil tamir masraflarında borçlanmamak veya hisseleri zararına satmamak için 3 ila 6 aylık zorunlu gider tutarında likit (para piyasası fonu gibi) araçlarda tutulan nakit kalkandır."
      },
      {
        term: "50 / 30 / 20 Bütçe Kuralı",
        category: "Kişisel Bütçe",
        def: "Aylık net geliri; %50 Zorunlu Yaşam İhtiyaçları (kira, fatura, market), %30 İstekler/Sosyal (eğlence, tatil, kafe) ve %20 Tasarruf/Yatırım olarak 3 temel havuzda yönetme disiplinidir."
      },
      {
        term: "Enflasyon (Inflation)",
        category: "Makroekonomi",
        def: "Mal ve hizmetlerin fiyatlarındaki genel ve sürekli artış oranıdır. Paranın zaman içindeki satın alma gücünü eritir. Nakit parayı enflasyonu aşan getiri araçlarına yönlendirmek bir lüks değil, zorunluluktur."
      },
      {
        term: "Reel Faiz (Real Interest Rate)",
        category: "Bankacılık",
        def: "Nominal faiz oranından enflasyon oranının arındırılmasıyla bulunan gerçek kazançtır. Eğer faiz %40, enflasyon %50 ise paranız reel olarak %10 eriyor demektir (Negatif Reel Faiz)."
      },
      {
        term: "TEFAS (Türkiye Elektronik Fon Dağıtım Platformu)",
        category: "Yatırım Fonları",
        def: "SPK güvencesinde tüm banka ve portföy yönetim şirketlerinin fonlarının tek bir platformdan incelenip serbestçe alınıp satılabildiği merkezi fon pazar yeridir."
      },
      {
        term: "Stop-Loss (Zararı Durdur)",
        category: "Risk Yönetimi",
        def: "Yatırım yapılan bir varlığın fiyatı önceden belirlenen kritik bir seviyenin altına indiğinde otomatik olarak satılarak büyük felaket zararlarının önüne geçilmesini sağlayan koruma emridir."
      },
      {
        term: "DCA (Dolar Maliyet Ortalaması)",
        category: "Yatırım Stratejisi",
        def: "Piyasanın dip veya tepe noktalarını tahmin etmeye çalışmadan, her ay veya periyotta sabit tutarda (örneğin her ay 2.000 TL) düzenli alım yaparak ortalama maliyeti lehte optimize etme yöntemidir."
      },
      {
        term: "Soğuk Cüzdan (Cold Wallet / Donanım Cüzdanı)",
        category: "Kripto & Web3",
        def: "Kripto varlıkların özel anahtarlarını (private keys) internete hiç bağlamadan fiziksel bir cihazda güvenle saklayan, siber saldırılara ve borsa batıklarına karşı en güvenli cüzdan türüdür."
      },
      {
        term: "Halving (Yarılanma)",
        category: "Kripto & Web3",
        def: "Bitcoin ağında her 210.000 blokta bir (yaklaşık 4 yılda bir) yeni üretilen madencilik blok ödülünün yarı yarıya düşürülmesidir. Arzı kıstığı için tarihsel olarak büyük piyasa hareketlerini tetikler."
      },
      {
        term: "72 Kuralı",
        category: "Matematiksel Finans",
        def: "72 sayısını yıllık beklenen getiri oranına bölerek, bir yatırımın değerini tam 2 katına çıkarması için gereken yıl sayısını pratik olarak hesaplama kuralıdır. (Örn: %12 getiri ile 72 / 12 = 6 yılda ikiye katlanır)."
      },
      {
        term: "%4 Kuralı (Trinity Study - FIRE)",
        category: "Finansal Özgürlük",
        def: "Yıllık toplam yaşam masraflarınızın 25 katı büyüklüğünde bir çeşitlendirilmiş portföye sahip olduğunuzda, her yıl portföyün %4'ünü çekerek anaparayı tüketmeden ömür boyu yaşayabileceğinizi kanıtlayan finansal kuraldır."
      }
    ]
  },

  goldenRules: {
    title: "Finansal Başarının 10 Altın Kuralı",
    desc: "Milyarder yatırımcıların ve finansal özgürlerin hayat boyu sadık kaldığı değişmez prensipler.",
    icon: "fa-award",
    items: [
      {
        number: 1,
        title: "Önce Kendine Öde (Pay Yourself First)",
        text: "Maaşınız yattığında önce faturaları ve harcamaları yapıp kalanı biriktirmeye çalışmayın; ay sonunda geriye genellikle hiçbir şey kalmaz. İlk gün belirlenen tutarı doğrudan yatırım hesabına aktarın, kalanla yaşayın."
      },
      {
        number: 2,
        title: "Tüm Yumurtaları Asla Aynı Sepete Koyma",
        text: "Bütün servetinizi tek bir hisseye, tek bir kripto paraya veya tek bir sektöre bağlamayın. Portföyünüzü hisse, altın, yatırım fonu ve nakit benzeri araçlara dağıtarak riski yönetin."
      },
      {
        number: 3,
        title: "Anlamadığın Şeye Asla Yatırım Yapma",
        text: "Nasıl para kazandığını, iş modelini veya temel dinamiklerini bilmediğiniz popüler tüyolara ve dedikodulara paranızı yatırmayın. Kendi araştırdığınız ve güvendiğiniz varlıklarda kalın."
      },
      {
        number: 4,
        title: "Duygularını Portföyünden Uzak Tut",
        text: "Piyasa coşku içindeyken tepeden açgözlülükle almayın, piyasa kırmızıya boyandığında panikle en dipten satmayın. Planınıza sadık kalın."
      },
      {
        number: 5,
        title: "Bileşik Getirinin Zamanına Saygı Göster",
        text: "Zenginleşmek bir gecede olan bir olay değil, yıllar süren disiplinli bir kartopu sürecidir. Erken yaşta başlamak ve sabretmek en büyük sermayedir."
      },
      {
        number: 6,
        title: "Asla Tüketim İçin Borçlanma (Kötü Borç)",
        text: "Değeri hızla düşen telefon, lüks kıyafet veya tatil harcamaları için yüksek faizli tüketici kredisi veya kart borcuna girmeyin. Borcu yalnızca gelir üreten varlıklar için kullanın."
      },
      {
        number: 7,
        title: "Enflasyonu Daima Hesaba Kat",
        text: "Paranızın sadece rakam olarak artması yetmez; enflasyonun üzerinde getiri üretmiyorsanız reel olarak fakirleşiyorsunuz demektir. Reel getiri tek pusulanız olsun."
      },
      {
        number: 8,
        title: "Finansal Hava Yastığını Eksik Etme",
        text: "3-6 aylık zorunlu masraflarını karşılayan bir acil durum fonu olmadan agresif hisse veya kripto yatırımları yapmayın. Aksi halde ilk krizde hisselerinizi zararına satarsınız."
      },
      {
        number: 9,
        title: "Görünmez Masrafları ve Komisyonları İzle",
        text: "Yüksek fon yönetim ücretleri, gereksiz banka kesintileri ve aşırı sık al-sat komisyonları uzun vadeli getirinizin büyük kısmını yok edebilir."
      },
      {
        number: 10,
        title: "Kendine Yapılan Yatırım En Yüksek Temettüyü Öder",
        text: "Finansal okuryazarlığınızı geliştirmek, yeni mesleki beceriler kazanmak ve gelir kaynaklarınızı çeşitlendirmek, piyasada yapabileceğiniz en kârlı yatırımdır."
      }
    ]
  },

  strategies: {
    title: "Kanıtlanmış Portföy Stratejileri",
    desc: "Farklı risk profillerine uygun modern varlık dağılım modelleri.",
    icon: "fa-chess",
    items: [
      {
        name: "Muhafazakar Kalkan Portföyü",
        risk: "Düşük (1-2 / 5)",
        target: "Sermaye Koruma & Enflasyona Karşı Direnç",
        allocations: [
          { asset: "Para Piyasası & Kısa Vadeli Tahvil Fonları", pct: 40 },
          { asset: "Kıymetli Madenler (Gram Altın / Gümüş Fonu)", pct: 30 },
          { asset: "BIST Temettü 25 / Defansif Hisseler", pct: 20 },
          { asset: "Döviz / Eurobond Fonu", pct: 10 }
        ]
      },
      {
        name: "Dengeli Büyüme Portföyü",
        risk: "Orta (3 / 5)",
        target: "Enflasyon Üzeri İstikrarlı Reel Getiri",
        allocations: [
          { asset: "BIST 100 / Seçilmiş Büyüme Hisseleri", pct: 40 },
          { asset: "Yabancı Teknoloji & Global Borsa Fonları", pct: 20 },
          { asset: "Altın & Kıymetli Madenler", pct: 20 },
          { asset: "Değişken / Borçlanma Fonları", pct: 15 },
          { asset: "Spot Kripto Varlıklar (BTC/ETH)", pct: 5 }
        ]
      },
      {
        name: "Agresif Gelecek & FIRE Portföyü",
        risk: "Yüksek (4-5 / 5)",
        target: "Genç Yatırımcılar İçin Maksimum Sermaye Katlama",
        allocations: [
          { asset: "Yerli Büyüme & İhracatçı Hisseler", pct: 40 },
          { asset: "Global Teknoloji & Yapay Zeka Fonları", pct: 30 },
          { asset: "Kripto Varlıklar (BTC, ETH, L1)", pct: 15 },
          { asset: "Emtia & Değerli Madenler", pct: 10 },
          { asset: "Likit Fırsat Nakdi", pct: 5 }
        ]
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.financeBookData = financeBookData;
}
