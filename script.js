document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. Translations Dictionary (8 Website Selector Languages)
  // -------------------------------------------------------------
  const translations = {
    en: {
      badgeApp: "Official Website",
      eyebrow: "DAILY NAAM JAP",
      tagline: "Your Naam. Your Count. Your Mala.",
      subtext: "A calm, focused digital Rudraksha Mala for your daily Naam Jap. Choose your Naam, set your target, and begin your practice without creating an account.",
      btnAndroidSubtitle: "ANDROID DIRECT APK",
      btnAndroidTitle: "Download APK",
      btnAndroidMeta: "Version 1.2.0 (31.3 MB)",
      btnPlaySubtitle: "GOOGLE PLAY STORE",
      btnPlayTitle: "Coming Soon",
      btnPlayMeta: "Android release in preparation",
      qrHeader: "SCAN TO DOWNLOAD ON MOBILE",
      qrDesc: "Scan with your phone camera to open this download page on your mobile phone.",
      copyText: "Copy Download Link",
      screenshotsLabel: "APP SCREENSHOTS",
      badgeOffline: "Offline Chanting",
      badgeFree: "Free & Ad-Supported",
      badgeTarget: "Custom Target",
      badgeLangs: "14 Languages",
      footerText: "Naam Jap • Your Naam. Your Count. Your Mala.",
      footerHelp: "Need help? Contact"
    },
    hi: {
      badgeApp: "आधिकारिक वेबसाइट",
      eyebrow: "दैनिक नाम जप",
      tagline: "आपका नाम। आपकी गिनती। आपकी माला।",
      subtext: "आपके दैनिक नाम जप के लिए एक शांत और सरल डिजिटल रुद्राक्ष माला। बिना लॉगिन के अपना नाम और लक्ष्य चुनें और साधना आरंभ करें।",
      btnAndroidSubtitle: "एंड्रॉइड डायरेक्ट एपीके",
      btnAndroidTitle: "डाउनलोड एपीके (APK)",
      btnAndroidMeta: "संस्करण 1.2.0 (31.3 MB)",
      btnPlaySubtitle: "गूगल प्ले स्टोर",
      btnPlayTitle: "शीघ्र आ रहा है",
      btnPlayMeta: "एंड्रॉइड रिलीज़ प्रक्रिया में",
      qrHeader: "मोबाइल पर डाउनलोड करने के लिए स्कैन करें",
      qrDesc: "अपने मोबाइल पर इस डाउनलोड पृष्ठ को खोलने के लिए अपने फोन कैमरे से स्कैन करें।",
      copyText: "डाउनलोड लिंक कॉपी करें",
      screenshotsLabel: "ऐप स्क्रीनशॉट",
      badgeOffline: "ऑफ़लाइन जप सुविधा",
      badgeFree: "मुफ़्त (विज्ञापन समर्थित)",
      badgeTarget: "कस्टम लक्ष्य संख्या",
      badgeLangs: "14 भाषाएं",
      footerText: "नाम जप • आपका नाम। आपकी गिनती। आपकी माला।",
      footerHelp: "सहायता चाहिए? संपर्क करें"
    },
    sa: {
      badgeApp: "आधिकारिकं जालपृष्ठम्",
      eyebrow: "दैनिक नाम जपम्",
      tagline: "तव नाम। तव संख्या। तव माला।",
      subtext: "तव नित्यनामजपाय सरला शान्ता च डिजि़टल् रुद्राक्षमाला। प्रवेशं विना स्वकीयं नाम लक्ष्यं च चित्वा जपं प्रारभन्तु।",
      btnAndroidSubtitle: "एंड्रॉइड् प्रत्यक्ष एपीके",
      btnAndroidTitle: "डाउनलोड् एपीके",
      btnAndroidMeta: "आवृत्तिः 1.2.0 (31.3 MB)",
      btnPlaySubtitle: "गूगल प्ले स्टोर्",
      btnPlayTitle: "शीघ्रम् आगच्छति",
      btnPlayMeta: "प्ले स्टोर् प्रकाशनं प्रचलति",
      qrHeader: "मोबाईल् मध्ये डाउनलोड् कर्तुं स्कैन कुर्वन्तु",
      qrDesc: "स्वकीये मोबाईल् मध्ये एतं डाउनलोड् पृष्ठं उद्घाटयितुं फोन् कैमेरा द्वारा स्कैन कुर्वन्तु।",
      copyText: "डाउनलोड् लिङ्क् प्रतिलिपिं कुर्वन्तु",
      screenshotsLabel: "एप् स्क्रीनशॉट्",
      badgeOffline: "ऑफ़्लैन् जपः",
      badgeFree: "निःशुल्कम् (विज्ञापनसहितम्)",
      badgeTarget: "इच्छानुसारं लक्ष्यम्",
      badgeLangs: "14 भाषाः",
      footerText: "नाम जपम् • तव नाम। तव संख्या। तव माला।",
      footerHelp: "सहायता आवश्यकी? सम्पर्काः"
    },
    gu: {
      badgeApp: "સત્તાવાર વેબસાઇટ",
      eyebrow: "દૈનિક નામ જપ",
      tagline: "તમારું નામ. તમારી ગણતરી. તમારી માળા.",
      subtext: "તમારા દૈનિક નામ જપ માટે એક શાંત અને સરળ ડિજિટલ રુદ્રાક્ષ માળા. કોઈપણ લૉગિન વિના તમારું નામ અને લક્ષ્ય પસંદ કરીને જપ શરૂ કરો.",
      btnAndroidSubtitle: "એન્ડ્રોઇડ ડાયરેક્ટ એપીકે",
      btnAndroidTitle: "ડાઉનલોડ એપીકે (APK)",
      btnAndroidMeta: "આવૃત્તિ 1.2.0 (31.3 MB)",
      btnPlaySubtitle: "ગૂગલ પ્લે સ્ટોર",
      btnPlayTitle: "ટૂંક સમયમાં આવી રહ્યું છે",
      btnPlayMeta: "પ્લે સ્ટોર રિલીઝની તૈયારીમાં",
      qrHeader: "મોબાઇલ પર ડાઉનલોડ કરવા સ્કેન કરો",
      qrDesc: "તમારા ફોન પર આ ડાઉનલોડ પૃષ્ઠ ખોલવા માટે કૅમેરાથી સ્કેન કરો.",
      copyText: "ડાઉનલોડ લિંક કૉપિ કરો",
      screenshotsLabel: "એપ સ્ક્રીનશૉટ",
      badgeOffline: "ઑફલાઇન જપ સુવિધા",
      badgeFree: "મફત (જાહેરાત આધારિત)",
      badgeTarget: "કસ્ટમ લક્ષ્યાંક",
      badgeLangs: "14 ભાષાઓ",
      footerText: "નામ જપ • તમારું નામ. તમારી ગણતરી. તમારી માળા.",
      footerHelp: "મદદ જોઈએ છે? સંપર્ક કરો"
    },
    ta: {
      badgeApp: "அதிகாரப்பூர்வ தளம்",
      eyebrow: "தினசரி நாம ஜபம்",
      tagline: "உங்கள் நாமம். உங்கள் எண்ணிக்கை. உங்கள் மாலை.",
      subtext: "உங்கள் தினசரி நாம ஜபத்திற்கான அமைதியான டிஜிட்டல் ருத்ராட்ச மாலை. கணக்கு தொடங்காமல் உங்கள் நாமத்தையும் இலக்கையும் தேர்ந்தெடுத்து ஜபத்தைத் தொடங்குங்கள்.",
      btnAndroidSubtitle: "ஆண்ட்ராய்டு நேரடி APK",
      btnAndroidTitle: "APK பதிவிறக்க",
      btnAndroidMeta: "பதிப்பு 1.2.0 (31.3 MB)",
      btnPlaySubtitle: "கூகுள் பிளே ஸ்டோர்",
      btnPlayTitle: "விரைவில் வருகிறது",
      btnPlayMeta: "Play Store வெளியீடு தயாராகிறது",
      qrHeader: "மொபைலில் பதிவிறக்க ஸ்கேன் செய்யவும்",
      qrDesc: "உங்கள் மொபைலில் இந்தப் பக்கத்தைத் திறக்க கேமராவால் ஸ்கேன் செய்யவும்.",
      copyText: "பதிவிறக்க லிங்க் நகலெடு",
      screenshotsLabel: "ஆப் ஸ்கிரீன்ஷாட்கள்",
      badgeOffline: "ஆஃப்லைன் ஜபம்",
      badgeFree: "இலவசம் (விளம்பர ஆதரவு)",
      badgeTarget: "விருப்ப எண்ணிக்கை",
      badgeLangs: "14 மொழிகள்",
      footerText: "நாம ஜபம் • உங்கள் நாமம். உங்கள் எண்ணிக்கை. உங்கள் மாலை.",
      footerHelp: "உதவி தேவையா? தொடர்பு கொள்ளவும்"
    },
    te: {
      badgeApp: "అధికారిక వెబ్‌సైట్",
      eyebrow: "రోజువారీ నామ జపం",
      tagline: "మీ నామం. మీ లెక్కింపు. మీ మాల.",
      subtext: "మీ రోజువారీ నామ జపం కోసం ప్రశాంతమైన డిజిటల్ రుద్రాక్ష మాల. ఖాతా అవసరం లేకుండా మీ నామం మరియు లక్ష్యాన్ని ఎంచుకుని జపం ప్రారంభించండి.",
      btnAndroidSubtitle: "ఆండ్రాయిడ్ డైరెక్ట్ APK",
      btnAndroidTitle: "APK డౌన్‌లోడ్ చేయండి",
      btnAndroidMeta: "వెర్షన్ 1.2.0 (31.3 MB)",
      btnPlaySubtitle: "గూగుల్ ప્లే స్టోర్",
      btnPlayTitle: "త్వరలో వస్తోంది",
      btnPlayMeta: "Play Store విడుదల సిద్ధమవుతోంది",
      qrHeader: "మొబైల్‌లో డౌన్‌లోడ్ చేయడానికి స్కాన్ చేయండి",
      qrDesc: "మీ ఫోన్‌లో ఈ పేజీని తెరవడానికి కెమెరాతో స్కాన్ చేయండి.",
      copyText: "లింక్ కాపీ చేయండి",
      screenshotsLabel: "యాప్ స్క్రీన్‌షాట్లు",
      badgeOffline: "ఆఫ్‌లైన్ జపం",
      badgeFree: "ఉచితం (యాడ్ సపోర్ట్‌తో)",
      badgeTarget: "అనుకూల లక్ష్యం",
      badgeLangs: "14 భాషలు",
      footerText: "నామ జపం • మీ నామం. మీ లెక్కింపు. మీ మాల.",
      footerHelp: "సహాయం కావాలా? సంప్రదించండి"
    },
    bn: {
      badgeApp: "অফিসিয়াল ওয়েবসাইট",
      eyebrow: "দৈনিক নাম জপ",
      tagline: "আপনার নাম। আপনার গণনা। আপনার মালা।",
      subtext: "আপনার দৈনন্দিন নাম জপের জন্য একটি শান্ত ডিজিটাল রুদ্রাক্ষ মালা। কোনো অ্যাকাউন্ট ছাড়াই আপনার নাম ও লক্ষ্য নির্বাচন করে জপ শুরু করুন।",
      btnAndroidSubtitle: "অ্যান্ড্রয়েড সরাসরি APK",
      btnAndroidTitle: "APK ডাউনলোড করুন",
      btnAndroidMeta: "সংস্করণ 1.2.0 (31.3 MB)",
      btnPlaySubtitle: "গুগল প্লে স্টোর",
      btnPlayTitle: "শীঘ্রই আসছে",
      btnPlayMeta: "Play Store প্রকাশের প্রস্তুতি চলছে",
      qrHeader: "মোবাইলে ডাউনলোড করতে স্ক্যান করুন",
      qrDesc: "আপনার ফোনে এই পৃষ্ঠাটি খুলতে ক্যামেরা দিয়ে স্ক্যান করুন।",
      copyText: "ডাউনলোড লিঙ্ক কপি করুন",
      screenshotsLabel: "অ্যাপ স্ক্রিনশট",
      badgeOffline: "অফলাইন জপ",
      badgeFree: "বিনামূল্যে (বিজ্ঞাপন-সমর্থিত)",
      badgeTarget: "পছন্দসই টার্গেট",
      badgeLangs: "১৪টি ভাষা",
      footerText: "নাম জপ • আপনার নাম। আপনার গণনা। আপনার মালা।",
      footerHelp: "সাহায্য প্রয়োজন? যোগাযোগ করুন"
    },
    pa: {
      badgeApp: "ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟ",
      eyebrow: "ਰੋਜ਼ਾਨਾ ਨਾਮ ਜਪ",
      tagline: "ਤੁਹਾਡਾ ਨਾਮ। ਤੁਹਾਡੀ ਗਿਣਤੀ। ਤੁਹਾਡੀ ਮਾਲਾ।",
      subtext: "ਤੁਹਾਡੇ ਰੋਜ਼ਾਨਾ ਨਾਮ ਜਪ ਲਈ ਇੱਕ ਸ਼ਾਂਤ ਅਤੇ ਸਰਲ ਡਿਜੀਟਲ ਰੁਦਰਾਖ ਮਾਲਾ। ਬਿਨਾਂ ਲੌਗਇਨ ਆਪਣਾ ਨਾਮ ਅਤੇ ਟੀਚਾ ਚੁਣੋ, ਅਤੇ ਜਪ ਸ਼ੁਰੂ ਕਰੋ।",
      btnAndroidSubtitle: "ਐਂਡਰੌਇਡ ਡਾਇਰੈਕਟ APK",
      btnAndroidTitle: "APK ਡਾਊਨਲੋਡ ਕਰੋ",
      btnAndroidMeta: "ਵਰਜਨ 1.2.0 (31.3 MB)",
      btnPlaySubtitle: "ਗੂਗਲ ਪਲੇ ਸਟੋਰ",
      btnPlayTitle: "ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ",
      btnPlayMeta: "Play Store ਰਿਲੀਜ਼ ਦੀ ਤਿਆਰੀ ਵਿੱਚ",
      qrHeader: "ਮੋਬਾਈਲ 'ਤੇ ਡਾਊਨਲੋਡ ਕਰਨ ਲਈ ਸਕੈਨ ਕਰੋ",
      qrDesc: "ਆਪਣੇ ਮੋਬਾਈਲ 'ਤੇ ਇਹ ਪੰਨਾ ਖੋਲ੍ਹਣ ਲਈ ਕੈਮਰੇ ਨਾਲ ਸਕੈਨ ਕਰੋ।",
      copyText: "ਡਾਊਨਲੋਡ ਲਿੰਕ ਕਾਪੀ ਕਰੋ",
      screenshotsLabel: "ਐਪ ਸਕ੍ਰੀਨਸ਼ੌਟ",
      badgeOffline: "ਔਫਲਾਈਨ ਜਪ",
      badgeFree: "ਮੁਫ਼ਤ (ਵਿਗਿਆਪਨ-ਸਮਰਥਿਤ)",
      badgeTarget: "ਕਸਟਮ ਟਾਰਗੇਟ",
      badgeLangs: "14 ਭਾਸ਼ਾਵਾਂ",
      footerText: "ਨਾਮ ਜਪ • ਤੁਹਾਡਾ ਨਾਮ। ਤੁਹਾਡੀ ਗਿਣਤੀ। ਤੁਹਾਡੀ ਮਾਲਾ।",
      footerHelp: "ਮਦਦ ਚਾਹੀਦੀ ਹੈ? ਸੰપર્ਕ ਕਰੋ"
    }
  };

  // -------------------------------------------------------------
  // 2. Language Selection Handler
  // -------------------------------------------------------------
  const langSelect = document.getElementById('langSelect');
  function setLanguage(langKey) {
    const selected = translations[langKey] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((elem) => {
      const key = elem.getAttribute('data-i18n');
      if (selected[key]) {
        elem.textContent = selected[key];
      }
    });
    try {
      localStorage.setItem('naamjap_lang', langKey);
    } catch (e) {
      // Ignore storage access restrictions
    }
  }

  if (langSelect) {
    let savedLang = 'en';
    try {
      savedLang = localStorage.getItem('naamjap_lang') || 'en';
    } catch (e) {
      savedLang = 'en';
    }
    langSelect.value = translations[savedLang] ? savedLang : 'en';
    setLanguage(langSelect.value);

    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }

  // -------------------------------------------------------------
  // 3. Screenshot Carousel with Left/Right Buttons & Dots
  // -------------------------------------------------------------
  const track = document.getElementById('screenshotsTrack');
  const dots = document.querySelectorAll('#screenshotsDots .dot');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  if (track) {
    function getSlideWidth() {
      const firstSlide = track.querySelector('.screenshot-slide');
      return firstSlide ? firstSlide.getBoundingClientRect().width + 16 : 300;
    }

    if (dots.length) {
      track.addEventListener('scroll', () => {
        const slideWidth = getSlideWidth();
        const idx = Math.min(dots.length - 1, Math.max(0, Math.round(track.scrollLeft / slideWidth)));
        dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      }, { passive: true });

      dots.forEach((dot) => {
        dot.addEventListener('click', () => {
          const idx = parseInt(dot.dataset.idx, 10);
          track.scrollTo({ left: getSlideWidth() * idx, behavior: 'smooth' });
        });
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: getSlideWidth(), behavior: 'smooth' });
      });
    }
  }

  // -------------------------------------------------------------
  // 4. Dynamic QR Code update
  // -------------------------------------------------------------
  const qrImage = document.getElementById('qrImage');
  if (qrImage) {
    const targetUrl = window.location.protocol.startsWith('http')
      ? window.location.href
      : 'https://naamjap.app/';
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${encodeURIComponent(targetUrl)}&color=241A15&bgcolor=F7F1E6`;
  }

  // -------------------------------------------------------------
  // 5. Instant Download Click Feedback
  // -------------------------------------------------------------
  const apkDownloadBtn = document.getElementById('apkDownloadBtn');
  const apkTitleText = document.getElementById('apkTitleText');
  const apkMetaText = document.getElementById('apkMetaText');

  if (apkDownloadBtn) {
    apkDownloadBtn.addEventListener('click', () => {
      if (navigator.vibrate) {
        try { navigator.vibrate(50); } catch (e) {}
      }

      if (apkTitleText) {
        const origTitle = apkTitleText.textContent;
        apkTitleText.textContent = "Download Started";
        if (apkMetaText) apkMetaText.textContent = "Check browser downloads for progress";

        setTimeout(() => {
          apkTitleText.textContent = origTitle;
          if (apkMetaText) apkMetaText.textContent = "Version 1.2.0 (31.3 MB)";
        }, 4000);
      }
    });
  }

  // -------------------------------------------------------------
  // 6. Copy Helpers (Download URL & Support Email)
  // -------------------------------------------------------------
  function bindCopyButton(btnId, textId, valueProvider, copiedLabel, resetLabelProvider) {
    const btn = document.getElementById(btnId);
    const labelEl = textId ? document.getElementById(textId) : btn;
    if (!btn || !labelEl) return;

    btn.addEventListener('click', () => {
      const valueToCopy = valueProvider();
      if (!navigator.clipboard || !navigator.clipboard.writeText) return;

      navigator.clipboard.writeText(valueToCopy).then(() => {
        labelEl.textContent = copiedLabel;
        btn.style.color = '#16A34A';
        btn.style.borderColor = '#16A34A';
        setTimeout(() => {
          labelEl.textContent = resetLabelProvider();
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2500);
      }).catch(() => {});
    });
  }

  bindCopyButton(
    'copyBtn',
    'copyText',
    () => window.location.href,
    'Link Copied!',
    () => {
      const currentLang = langSelect ? langSelect.value : 'en';
      return (translations[currentLang] || translations.en).copyText;
    }
  );

  bindCopyButton(
    'copyEmailBtn',
    'copyEmailText',
    () => 'pinakmahadev@gmail.com',
    'Email Copied!',
    () => 'Copy Email Address'
  );
});
