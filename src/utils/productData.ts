import { Bot, Mic, Share2, Database, ShoppingCart, Headset, BarChart, Server, Globe, Smartphone, Zap, Shield, Users, Clock, Phone, FileText, Activity, Podcast, Calendar, DollarSign, Filter, Eye, MousePointerClick, Send, CheckCircle, Truck, RefreshCw, Settings, Brain, Video, UserCheck, Award, Leaf, Heart, Star, Sparkles, Languages, Lock, Target, Clipboard } from 'lucide-react';

export interface ProductStatistic {
    value: string;
    label: string;
    icon?: any;
    breakdown?: { value: number; label: string; color?: string; }[];
}

export interface ProductProcessStep {
    step: string;
    title: string;
    description: string;
}

export interface UseCase {
    title: string;
    description: string;
    icon?: any;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface ProductFeature {
    title: string;
    description: string;
    icon: any;
}

export interface ProductBenefit {
    title: string;
    description: string;
    image?: string;
}

export interface ProductData {
    id: string;
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    heroImage?: string;
    demoImage?: string; // For Experience Zone
    statistics: ProductStatistic[];
    features: ProductFeature[];
    process: ProductProcessStep[];
    benefits: ProductBenefit[];
    useCases: UseCase[];
    faq: FAQItem[];
}

export const PRODUCT_DATA: Record<string, ProductData> = {
    '/products/frosty-ai': {
        id: 'frosty-ai',
        tagline: 'AUTOMATE CUSTOMER SUPPORT',
        title: 'Frosty AI Agent',
        subtitle: 'Intelligent Conversations, Infinite Scale',
        description: 'Empower your support team with a next-gen AI agent that understands context, sentiment, and intent. Resolve up to 80% of inquiries instantly without human intervention.',
        badge: 'Top Rated Support AI',
        heroImage: '/agent1.png',
        demoImage: '/optimized/chatbot-rafiki.webp',
        statistics: [
            { value: '80%', label: 'Automated Resolutions', icon: Zap },
            { value: '24/7', label: 'Availability', icon: Clock },
            { value: '30s', label: 'Avg. Response Time', icon: BarChart },
            { value: '3x', label: 'ROI in Year 1', icon: Database },
        ],
        process: [
            { step: '01', title: 'Connect Data', description: 'Link your Knowledge Base, CRM, and past tickets.' },
            { step: '02', title: 'Train Agent', description: 'Our AI automatically learns your brand voice and policies.' },
            { step: '03', title: 'Go Live', description: 'Deploy instantly across Web, WhatsApp, and Social channels.' }
        ],
        features: [
            { title: 'Contextual Understanding', description: 'Goes beyond keywords to understand customer intent and urgency.', icon: Bot },
            { title: 'Sentiment Analysis', description: 'Detects frustration and intelligently routes to human agents.', icon: Headset },
            { title: 'Omnichannel Deployment', description: 'One agent, everywhere: Website, WhatsApp, Messenger, Instagram.', icon: Share2 },
            { title: 'Smart Handoff', description: 'Seamlessly transfers complex issues to humans with full chat history.', icon: Users },
        ],
        benefits: [
            { title: 'Scale Without Hiring', description: 'Handle peak season traffic without adding headcount.' },
            { title: 'Consistent Experience', description: 'Deliver on-brand responses 100% of the time.' },
        ],
        useCases: [
            { title: 'E-Commerce Support', description: 'Order tracking, returns, and product FAQs.', icon: ShoppingCart },
            { title: 'SaaS Helpdesk', description: 'Technical troubleshooting and account management.', icon: Server },
            { title: 'Banking Assistant', description: 'Balance checks, transaction history, and fraud alerts.', icon: Shield },
        ],
        faq: [
            { question: 'How long does it take to train?', answer: 'Most clients are live within 2 weeks. Our pre-trained models require minimal fine-tuning.' },
            { question: 'Does it integrate with Zendesk/Salesforce?', answer: 'Yes, we have native integrations with all major helpdesk and CRM platforms.' },
            { question: 'What happens if the AI makes a mistake?', answer: 'You can set confidence thresholds. Low-confidence queries are automatically routed to humans.' },
        ]
    },
    '/products/voice-ai': {
        id: 'voice-ai',
        tagline: 'REVOLUTIONIZE YOUR CALL CENTER',
        title: 'Voice AI Agent',
        subtitle: 'Human-like Voice Interactions at Scale',
        description: 'Create better customer experiences with less effort. Deploy low-latency voice AI agents that handle inbound support and outbound sales calls with natural, human-like fluidity.',
        badge: 'Low Latency Voice',
        heroImage: '/optimized/frostrek_VA.webp',
        demoImage: '/vn1.png',
        statistics: [
            { value: '50%', label: 'Reduction in Costs', icon: BarChart },
            { value: '90%', label: 'Call Automation', icon: Phone },
            { value: '1.2s', label: 'Ultra-Low Latency', icon: Zap },
            { value: '40+', label: 'Languages Supported', icon: Globe },
        ],
        process: [
            { step: '01', title: 'Design Flow', description: 'Use our drag-and-drop builder to create conversation paths.' },
            { step: '02', title: 'Select Voice', description: 'Choose from our library of premium neural voices or clone your own.' },
            { step: '03', title: 'Deploy', description: 'Integrate with your telephony provider (Twilio, Vonage, etc.) instantly.' }
        ],
        features: [
            { title: 'Real-time Transcription', description: 'Transcribes and analyzes calls as they happen for instant insights.', icon: FileText },
            { title: 'Natural Voice Synthesis', description: 'Indistinguishable from human agents with emotional modulation.', icon: Mic },
            { title: 'Interrupt Handling', description: 'Handles interruptions and "umms" naturally like a real person.', icon: Activity },
            { title: 'Inbound & Outbound', description: 'Perfect for support hotlines or proactive sales outreach.', icon: Podcast },
        ],
        benefits: [
            { title: 'Endless Capacity', description: 'Never put a customer on hold again.' },
            { title: 'Perfect Compliance', description: 'Every call adheres strictly to regulatory scripts.' },
        ],
        useCases: [
            { title: 'Appointment Scheduling', description: 'Clinics, Salons, and Service businesses.', icon: Calendar },
            { title: 'Debt Collection', description: 'Empathetic, compliant, and persistent payment reminders.', icon: DollarSign },
            { title: 'Lead Qualification', description: 'Filter inbound leads before routing to sales executives.', icon: Filter },
        ],
        faq: [
            { question: 'Does it sound robotic?', answer: 'Not at all. We use the latest neural TTS engines for hyper-realistic intonation and breathing.' },
            { question: 'Can it handle accents?', answer: 'Yes, our models are trained on diverse datasets to understand global accents.' },
            { question: 'Is it PCI compliant?', answer: 'Yes, we support secure DTMF masking for credit card payments.' },
        ]
    },
    '/products/whatsapp-agents': {
        id: 'whatsapp',
        tagline: 'ENGAGE WHERE IT MATTERS',
        title: 'WhatsApp Automation',
        subtitle: 'Turn Conversations into Revenue',
        description: 'Unlock the power of the world\'s most popular messaging app. Automate notifications, support, and sales directly in WhatsApp with official API integration.',
        badge: 'Meta Business Partner',
        heroImage: '/wp1.png', // Placeholder
        demoImage: '/wp2.png',
        statistics: [
            { value: '98%', label: 'Open Rate', icon: Eye },
            { value: '45%', label: 'Click-Through Rate', icon: MousePointerClick },
            { value: '5x', label: 'Higher Conversion', icon: BarChart },
            { value: '2B+', label: 'Active Users', icon: Users },
        ],
        process: [
            { step: '01', title: 'Get Verified', description: 'We help you apply for the official WhatsApp Business API.' },
            { step: '02', title: 'Build Templates', description: 'Create rich message templates for approval.' },
            { step: '03', title: 'Launch Campaigns', description: 'Send broadcasts and handle responses automatically.' }
        ],
        features: [
            { title: 'Automated Broadcasts', description: 'Send personalized offers and updates to thousands instantly.', icon: Send },
            { title: 'Interactive Buttons', description: 'Guide customers with Quick Replies and Call-to-Action buttons.', icon: Smartphone },
            { title: 'Catalog Integration', description: 'Showcase products and process orders without leaving the chat.', icon: ShoppingCart },
            { title: 'Green Tick Support', description: 'Assistance in getting the verified business badge.', icon: CheckCircle },
        ],
        benefits: [
            { title: 'Instant Reach', description: 'Reach customers instantly on their lock screens.' },
            { title: 'Media Rich', description: 'Send images, videos, and PDFs effortlessly.' },
        ],
        useCases: [
            { title: 'Order Updates', description: 'Shipping notifications and delivery tracking.', icon: Truck },
            { title: 'Abandoned Cart', description: 'Recover lost sales with timely reminders.', icon: RefreshCw },
            { title: 'Verification', description: 'Send OTPs securely via WhatsApp.', icon: Smartphone },
        ],
        faq: [
            { question: 'Is there a risk of getting banned?', answer: 'No, we use the official API which is fully compliant with WhatsApp policies.' },
            { question: 'Can I send promotional messages?', answer: 'Yes, using approved Marketing Templates.' },
        ]
    },
    '/products/hiyring': {
        id: 'hiyring',
        tagline: 'AI-POWERED HIRING PLATFORM',
        title: 'Hiyring.com',
        subtitle: 'Revolutionize Recruitment with AI Video Interviews',
        description: 'Hiyring, powered by Frostrek LLP, is an AI-powered hiring platform that enables companies to conduct autonomous AI video interviews, screening thousands of candidates in minutes instead of weeks. Reduce time-to-hire by up to 85% and significantly cut recruitment costs.',
        badge: 'AI Interview Platform',
        heroImage: '/optimized/chatbot-rafiki.webp',
        demoImage: '/optimized/chatbot-rafiki.webp',
        statistics: [
            { value: '85%', label: 'Reduced Time-to-Hire', icon: Clock },
            { value: '1000+', label: 'Candidates Screened/Hour', icon: Users },
            { value: '98%', label: 'Client Satisfaction', icon: Star },
            { value: '60%', label: 'Cost Savings', icon: BarChart },
        ],
        process: [
            { step: '01', title: 'Invite Candidates', description: 'Send personalized AI interview invitations to thousands of candidates in one click.' },
            { step: '02', title: 'AI Video Interview', description: 'Candidates complete flexible, on-demand AI video interviews at their convenience.' },
            { step: '03', title: 'Smart Ranking', description: 'AI analyzes responses for communication, sentiment, and suitability — then ranks top talent.' }
        ],
        features: [
            { title: 'Autonomous AI Interviews', description: 'Conduct thousands of AI video interviews simultaneously, 24/7, without human intervention.', icon: Video },
            { title: 'Deep Candidate Analysis', description: 'Goes beyond keyword matching — analyzes communication skills, sentiment, and overall suitability.', icon: Brain },
            { title: 'Bias-Free Evaluations', description: 'Anonymized assessments reduce unconscious bias for fair, equitable hiring decisions.', icon: Shield },
            { title: 'Multi-Language Support', description: 'Conduct interviews in multiple languages to hire diverse, global talent effortlessly.', icon: Languages },
            { title: 'Smart Candidate Ranking', description: 'Intelligently score and rank applicants to surface the best talent to your team instantly.', icon: Target },
            { title: 'Enterprise-Grade Security', description: 'SOC 2 compliant with end-to-end encryption for all interview data and candidate information.', icon: Lock },
        ],
        benefits: [
            { title: 'Speed & Scale', description: 'Screen thousands of candidates in minutes instead of weeks.' },
            { title: 'Reduce Costs', description: 'Significantly cut recruitment costs while improving hire quality.' },
        ],
        useCases: [
            { title: 'High-Volume Hiring', description: 'Screen thousands of applicants for campus drives, BPO, and retail positions.', icon: Users },
            { title: 'Technical Recruitment', description: 'Assess coding skills, problem-solving, and communication in one AI-driven session.', icon: Clipboard },
            { title: 'Global Talent Acquisition', description: 'Hire across time zones with flexible, on-demand interviews in multiple languages.', icon: Globe },
        ],
        faq: [
            { question: 'How does the AI interview work?', answer: 'Candidates receive an invitation link and complete a structured video interview at their convenience. Our AI analyzes verbal and non-verbal cues, communication quality, and response relevance to provide deep insights.' },
            { question: 'Is the evaluation really bias-free?', answer: 'Yes. Evaluations are anonymized — the AI assesses responses without access to demographic information, reducing unconscious bias significantly.' },
            { question: 'Can candidates practice before the real interview?', answer: 'Absolutely. Hiyring provides practice tools and personalized feedback to help candidates prepare and improve their performance.' },
            { question: 'What languages are supported?', answer: 'Hiyring supports interviews in 15+ languages including English, Hindi, Spanish, French, German, and more.' },
        ]
    },
    '/products/vedashi': {
        id: 'vedashi',
        tagline: 'MODERN AYURVEDIC WELLNESS',
        title: 'Vedashi.com',
        subtitle: 'Ancient Wisdom Meets Modern Wellness',
        description: 'Vedashi is a modern wellness brand rooted in the timeless principles of Ayurveda, delivering holistic healing through a seamless blend of ancient Himalayan wisdom and contemporary science. With 250,000+ wellness protocols delivered and a 98% client satisfaction rate.',
        badge: 'Ayurvedic Wellness Brand',
        heroImage: '/optimized/chatbot-rafiki.webp',
        demoImage: '/optimized/chatbot-rafiki.webp',
        statistics: [
            { value: '250K+', label: 'Wellness Protocols Delivered', icon: Heart },
            { value: '98%', label: 'Client Satisfaction Rate', icon: Star },
            { value: '5000+', label: 'Years of Healing Tradition', icon: Award },
            { value: '50+', label: 'Certified Practitioners', icon: UserCheck },
        ],
        process: [
            { step: '01', title: 'Discover & Consult', description: 'Personalized wellness assessment by experienced Ayurvedic physicians to understand your unique constitution.' },
            { step: '02', title: 'Custom Formulation', description: 'Clinically tested, ethically sourced ingredients crafted into pure and effective Ayurvedic formulations.' },
            { step: '03', title: 'Holistic Healing', description: 'Complete wellness ecosystem with yoga integration, guided healing, and community support for lasting results.' }
        ],
        features: [
            { title: 'Clinically Validated', description: 'Every product undergoes rigorous clinical testing for safety, potency, and measurable results.', icon: CheckCircle },
            { title: 'Ethically Sourced', description: 'Ingredients sourced from organic farms across India and Nepal, working with tribal harvesters.', icon: Leaf },
            { title: 'Proprietary Extraction', description: 'Innovative extraction techniques developed in-house to preserve maximum therapeutic potency.', icon: Sparkles },
            { title: 'Yoga Integration', description: 'Complete wellness protocols that combine Ayurvedic formulations with yoga and mindfulness practices.', icon: Heart },
            { title: 'Global Practitioner Network', description: 'Worldwide network of certified practitioners delivering personalized healing guidance.', icon: Globe },
            { title: 'Community Wellness', description: 'Online satsangs, community events, and shared healing experiences for transformative journeys.', icon: Users },
        ],
        benefits: [
            { title: 'Authenticity', description: 'Genuine Ayurvedic formulations validated by decades of practice and clinical research.' },
            { title: 'Sustainability', description: 'Ethically sourced, organic ingredients supporting traditional farming communities.' },
        ],
        useCases: [
            { title: 'Personal Wellness', description: 'Customized Ayurvedic protocols for stress, immunity, digestion, and overall well-being.', icon: Heart },
            { title: 'Corporate Wellness', description: 'Enterprise wellness programs combining Ayurveda and yoga for employee health.', icon: Users },
            { title: 'Practitioner Programs', description: 'Certification and support for Ayurvedic practitioners to expand their practice globally.', icon: Award },
        ],
        faq: [
            { question: 'Are Vedashi products clinically tested?', answer: 'Yes, every formulation undergoes rigorous clinical testing in collaboration with Ayurvedic physicians and modern labs to ensure safety, potency, and measurable results.' },
            { question: 'Where are the ingredients sourced from?', answer: 'We source our ingredients from certified organic farms across India and Nepal, working directly with tribal harvesters who have generations of knowledge about Himalayan medicinal plants.' },
            { question: 'How does the personalized wellness protocol work?', answer: 'Our experienced Ayurvedic physicians assess your unique Prakriti (constitution), current health concerns, and lifestyle to create a customized protocol combining products, diet guidance, and yoga practices.' },
            { question: 'Do you ship internationally?', answer: 'Yes, Vedashi products ship worldwide. Our global network of certified practitioners also provides personalized consultations regardless of your location.' },
        ]
    },
    // Fallback/Generic for other routes
    'generic': {
        id: 'generic',
        tagline: 'ENTERPRISE SOLUTIONS',
        title: 'Enterprise AI Suite',
        subtitle: 'Scalable Intelligence for Business',
        description: 'Leverage our full suite of AI tools to modernize your entire operation. From ERP automation to predictive analytics, we build the future of your business.',
        badge: 'Enterprise Grade',
        heroImage: '/enterprise_ai_suite.png',
        statistics: [
            {
                value: '100%',
                label: 'Efficiency Gains',
                icon: Settings,
                breakdown: [
                    { value: 65, label: 'Efficiency' },
                    { value: 25, label: 'Growth' },
                    { value: 10, label: 'Sustainability' }
                ]
            },
            {
                value: '99.9%',
                label: 'Uptime SLA',
                icon: Server,
                breakdown: [
                    { value: 90, label: 'Availability' },
                    { value: 8, label: 'Redundancy' },
                    { value: 2, label: 'Recovery' }
                ]
            },
            { value: '60%', label: 'Cost Reduction', icon: BarChart },
            {
                value: '3x',
                label: 'Faster Deployment',
                icon: Zap,
                breakdown: [
                    { value: 50, label: 'Automation' },
                    { value: 30, label: 'CI/CD Pipeline' },
                    { value: 20, label: 'Testing' }
                ]
            },
        ],
        process: [
            { step: '01', title: 'Consult', description: 'We analyze your current infrastructure.' },
            { step: '02', title: 'Architect', description: 'Design a custom AI solution.' },
            { step: '03', title: 'Execute', description: 'Agile implementation and training.' }
        ],
        features: [
            { title: 'Security First', description: 'ISO 27001 and GDPR compliant architecture.', icon: Shield },
            { title: 'Scalable', description: 'Built to handle enterprise-level loads.', icon: Database },
            { title: 'Custom LLMs', description: 'Fine-tune models on your proprietary data.', icon: Brain },
            { title: 'Real-time Analytics', description: 'Track performance with live dashboards and insights.', icon: BarChart },
            { title: 'Seamless Integration', description: 'Connect with your existing tools via REST APIs.', icon: Settings },
            { title: 'Global Reach', description: 'Multi-language support with 40+ locales.', icon: Globe },
        ],
        benefits: [
            { title: 'Future Proof', description: 'Stay ahead of the technology curve.' },
        ],
        useCases: [],
        faq: []
    }
};
