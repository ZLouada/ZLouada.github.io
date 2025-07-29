document.addEventListener('DOMContentLoaded', function() {

    // --- Elements ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    const langOptions = document.querySelectorAll('.lang-option');
    const htmlTag = document.getElementById('html-tag');
    const bodyTag = document.getElementById('body-tag');
    const langSwitcher = document.querySelector('.lang-switcher');
    const langSwitcherLink = langSwitcher.querySelector('.nav-link');

    // --- Translations Dictionary (No Changes Here) ---
    const translations = {
        en: {
            nav_about: "About Us",
            nav_collection: "Our Collection",
            nav_craftsmanship: "Craftsmanship",
            nav_contact: "Contact",
            hero_title: "The Art of Moroccan Elegance",
            hero_subtitle: "Timeless designs, handcrafted with passion.",
            hero_cta: "Explore Collection",
            about_title: "Our Story",
            about_text: "Welcome to Zayna Couture, where the rich tapestry of Moroccan heritage is woven into every thread. Born from a passion for timeless elegance and ancestral craftsmanship, our brand celebrates the iconic caftan. Each piece is a work of art, meticulously handcrafted by skilled artisans in the heart of Morocco, blending authentic tradition with a touch of modern sophistication.",
            collection_title: "Our Collection",
            caftan1_desc: "Royal Red Silk",
            caftan2_desc: "Fez Blue & Gold Embroidery",
            caftan3_desc: "Ivory White Pearl",
            caftan4_desc: "Emerald Green Cotton",
            caftan5_desc: "Midnight Black & Silver",
            caftan6_desc: "Rose Pink Floral",
            craft_title: "The Soul of Our Seams",
            craft_text: "Our commitment is to preserve the authentic Moroccan art of \"Maalem\". Every caftan is a testament to this heritage, featuring intricate hand-embroidery ('Tarz'), delicate beading ('Tanbat'), and the traditional 'Sfifa' and 'Aakad' closures. We partner with master craftsmen ('Maalems') who have inherited their skills through generations, ensuring each garment is not just worn, but cherished.",
            contact_title: "Get In Touch",
            contact_subtitle: "For bespoke orders, inquiries, or to schedule a private viewing at our Casablanca atelier, please contact us.",
            form_name_placeholder: "Your Name",
            form_email_placeholder: "Your Email",
            form_message_placeholder: "Your Message",
            form_button: "Send Message",
            footer_text: "&copy; 2025 Zayna Couture. All Rights Reserved. Casablanca, Morocco."
        },
        fr: {
            nav_about: "À Propos",
            nav_collection: "Notre Collection",
            nav_craftsmanship: "Savoir-Faire",
            nav_contact: "Contact",
            hero_title: "L'Art de l'Élégance Marocaine",
            hero_subtitle: "Des créations intemporelles, façonnées avec passion.",
            hero_cta: "Explorer la Collection",
            about_title: "Notre Histoire",
            about_text: "Bienvenue chez Zayna Couture, où le riche héritage marocain est tissé dans chaque fil. Née d'une passion pour l'élégance intemporelle et le savoir-faire ancestral, notre marque célèbre le caftan iconique. Chaque pièce est une œuvre d'art, méticuleusement confectionnée à la main par des artisans qualifiés au cœur du Maroc, alliant tradition authentique et une touche de sophistication moderne.",
            collection_title: "Notre Collection",
            caftan1_desc: "Soie Rouge Royal",
            caftan2_desc: "Broderie Fès Bleu & Or",
            caftan3_desc: "Perle Blanc Ivoire",
            caftan4_desc: "Coton Vert Émeraude",
            caftan5_desc: "Noir Minuit & Argent",
            caftan6_desc: "Rose Floral",
            craft_title: "L'Âme de Nos Coutures",
            craft_text: "Notre engagement est de préserver l'art marocain authentique du \"Maalem\". Chaque caftan témoigne de cet héritage, avec des broderies complexes à la main ('Tarz'), un perlage délicat ('Tanbat'), et les fermetures traditionnelles 'Sfifa' et 'Aakad'. Nous collaborons avec des maîtres artisans ('Maalems') qui ont hérité leurs compétences de génération en génération, garantissant que chaque vêtement n'est pas seulement porté, mais chéri.",
            contact_title: "Contactez-Nous",
            contact_subtitle: "Pour les commandes sur mesure, les demandes de renseignements ou pour planifier une visite privée à notre atelier de Casablanca, veuillez nous contacter.",
            form_name_placeholder: "Votre Nom",
            form_email_placeholder: "Votre E-mail",
            form_message_placeholder: "Votre Message",
            form_button: "Envoyer le Message",
            footer_text: "&copy; 2025 Zayna Couture. Tous droits réservés. Casablanca, Maroc."
        },
        ar: {
            nav_about: "من نحن",
            nav_collection: "مجموعتنا",
            nav_craftsmanship: "براعة الصنع",
            nav_contact: "اتصل بنا",
            hero_title: "فن الأناقة المغربية",
            hero_subtitle: "تصاميم خالدة، مصنوعة بحب وشغف.",
            hero_cta: "اكتشف المجموعة",
            about_title: "قصتنا",
            about_text: "أهلاً بكم في زهيرة كوتور، حيث يُنسج تراث المغرب الغني في كل خيط. وُلدت علامتنا من شغف بالأناقة الخالدة والحرفية المتوارثة، وهي تحتفي بالقفطان الأيقوني. كل قطعة هي عمل فني، مصنوعة يدويًا بدقة على أيدي أمهر الحرفيين في قلب المغرب، وتمزج بين الأصالة التقليدية ولمسة من الرقي الحديث.",
            collection_title: "مجموعتنا",
            caftan1_desc: "حرير أحمر ملكي",
            caftan2_desc: "تطريز فاسي باللونين الأزرق والذهبي",
            caftan3_desc: "لؤلؤي أبيض عاجي",
            caftan4_desc: "قطن أخضر زمردي",
            caftan5_desc: "أسود حالك وفضي",
            caftan6_desc: "وردي زهري",
            craft_title: "روح حياكتنا",
            craft_text: "التزامنا هو الحفاظ على فن \"المعلم\" المغربي الأصيل. كل قفطان هو شهادة على هذا التراث، ويتميز بالتطريز اليدوي المعقد ('الطرز')، والخرز الدقيق ('التنبات')، والإغلاق التقليدي بـ'السفيفة' و'العقاد'. نحن نتشارك مع الحرفيين المهرة ('المعلمين') الذين ورثوا مهاراتهم عبر الأجيال، مما يضمن أن كل قطعة ليست فقط للارتداء، بل للاعتزاز بها.",
            contact_title: "تواصل معنا",
            contact_subtitle: "للطلبات الخاصة، الاستفسارات، أو لتحديد موعد زيارة خاصة في ورشتنا بالدار البيضاء، يرجى التواصل معنا.",
            form_name_placeholder: "اسمك",
            form_email_placeholder: "بريدك الإلكتروني",
            form_message_placeholder: "رسالتك",
            form_button: "إرسال الرسالة",
            footer_text: "&copy; 2025 زهيرة كوتور. كل الحقوق محفوظة. الدار البيضاء، المغرب."
        }
    };

    // --- Functions ---
    const setLanguage = (lang) => {
        // Fallback to English if language not found
        const translation = translations[lang] || translations.en;
        
        document.querySelectorAll('[data-key]').forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translation[key]) {
                elem.innerHTML = translation[key];
            }
        });

        document.querySelectorAll('[data-key-placeholder]').forEach(elem => {
            const key = elem.getAttribute('data-key-placeholder');
             if (translation[key]) {
                elem.setAttribute('placeholder', translation[key]);
            }
        });
        
        htmlTag.lang = lang;
        bodyTag.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        
        localStorage.setItem('language', lang);
    };
    
    // --- Event Listeners ---

    // 1. Mobile Hamburger Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Ensure language dropdown closes when hamburger menu is toggled
        langSwitcher.classList.remove('active');
    });

    // 2. Language Switcher Dropdown Toggle (for Mobile)
    // This makes the globe icon reveal the language options on mobile
    langSwitcherLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Prevent page from jumping
            langSwitcher.classList.toggle('active');
        }
    });

    // 3. Set Language on Option Click (Works for Desktop and Mobile)
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = option.getAttribute('data-lang');
            setLanguage(selectedLang);

            // If on mobile, close the entire hamburger menu after selection
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // 4. Close Mobile Menu When a Regular Nav Link is Clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        // Check if the link is NOT the language switcher's link
        if (!link.parentElement.classList.contains('lang-switcher')) {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        }
    });

    // 5. Hide Navbar on Scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 100) {
            navbar.style.top = "-80px";
        } else {
            navbar.style.top = "0";
        }
        lastScrollY = window.scrollY;
    });

    // 6. Contact Form Submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }

        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        formMessage.style.color = 'green';
        contactForm.reset();
        setTimeout(() => { formMessage.textContent = ''; }, 5000);
    });

    // --- Initial Page Load ---
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});