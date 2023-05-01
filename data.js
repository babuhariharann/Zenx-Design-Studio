
import { ImHome } from "react-icons/im";
import { ImPencil } from "react-icons/im";
import { ImOffice } from "react-icons/im";
import { HiHomeModern } from "react-icons/hi2";
import { DiAtom } from "react-icons/di";
import { ImHappy } from "react-icons/im";
import { ImClock } from "react-icons/im";
import { ImPencil2 } from "react-icons/im";



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },

    {
        name: "Contact",
        path: '/contact'
    }
]







export const service = [
    {
        id: 1,
        icon: <ImPencil/>,
        title: "Architecture & Planning",
        info: "Designing Spaces With Trust and Creative thoughts",
        path: "/plans"
    },
    {
        id: 2,
        icon: <ImHome/>,
        title: "Home Interior Designs",
        info: "One-stop Shop For Classic-Contemporary Home Interiors",
        path: "/plans"
    },
    {
        id: 3,
        icon: <ImOffice/>,
        title: "Residential Construction",
        info: "We Promise Hassle-free Construction Services",
        path: "/plans"
    },
    {
        id: 4,
        icon: <HiHomeModern/>,
        title: "Renovation & Remodeling",
        info: "Revive Your Aged Homes to Surrounding That You Plan to Live",
        path: "/plans"
    }
]








export const values = [
    {
        id: 1,
        icon: <DiAtom/>,
        title: "Futuristic Design",
        desc: "Designs which are in style now and in future."
    },
    {
        id: 2,
        icon: <ImHappy/>,
        title: "Customer Focus",
        desc: "Having periodic design review with client as a partner"
    },
    {
        id: 3,
        icon: <ImClock/>,
        title: "Turn Around Time",
        desc: "We deliver your dream project way before the stipulated time frame!"
    },
    {
        id: 4,
        icon: <ImPencil2/>,
        title: "Design & Turnkey",
        desc: "We offer a one-stop solution for all your interior design and architecture needs!"
    }
]


export const testimonials = [
    {
        id: 1,
        name: "Ahmed",
        quote: "My family and I couldn't dream of a residence which is so prettily designed. The vibe is & our housing project has the right architecture designed making it so rejuvenating and beautiful. Finally, we enjoy living our dream! Thanks to Zenx Design Studio",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Akshaya Rao",
        quote: "Sometimes the smallest step in the right direction ends up being the biggest step in your life, and Minimalism is an appreciation of space , I choose Zenx Design Studio for my peaceful space, (its definitely my own space) Thank you so much team",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Shashank",
        quote: "My dream of a perfect home was only possible because of Zenx Design Studio. Detailing and perfection in both architectural and interior styling is to the point.They understood my needs and specifications and incorporated well in their designs.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Monu Gupta",
        quote: "Zenx Design Studio is very creative and innovative design ideas. Understands client requirements and comes up with great design ideas.Gives more attention to Aesthetics and concepts of design which is very satisfying beyond expectations of client as well as builder.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Sanjeev",
        quote: "Got my commercial building designed by them. It became a very good success commercially. Very happy that the team has good knowledge of the bylaws and legal systems.Thank you so much team to make my dream into reality",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]






export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]
















export const plans = [
    {
        id: 1,
        name: 'Standard',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: '2D Floor Plan-vasthu', available: true},
            {feature: '3D Elevation', available: true},
            {feature: 'Floor Plan Revision Upto 3 Times', available: true},
            {feature: 'Facade Type - Standard Design', available: true},
            {feature: 'Structural Design', available: true},
            {feature: 'Electrical Design', available: false},
            {feature: 'Plumbing Design', available: false},
            {feature: 'Furniture Layout', available: false},
            {feature: 'All Details Drawings', available: false},
            {feature: 'Site Visits by Engineers Upto 2 Times', available: false},
            {feature: '2D Elevation', available: false},
            {feature: '3D Floor Plan Walkthrough', available: false},
            {feature: '3D Walkthrough', available: false}
        ]
    },
    {
        id: 2,
        name: 'Premium',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: '2D Floor Plan-vasthu', available: true},
            {feature: '3D Elevation', available: true},
            {feature: 'Floor Plan Revision Upto 7 Times', available: true},
            {feature: 'Facade Type - Modern Design', available: true},
            {feature: 'Structural Design', available: true},
            {feature: 'Electrical Design', available: true},
            {feature: 'Plumbing Design', available: true},
            {feature: 'Furniture Layout', available: true},
            {feature: 'All Detail Drawings', available: true},
            {feature: 'Site Visits by Engineers Upto 2 Times', available: false},
            {feature: '2D Elevation', available: false},
            {feature: '3D Floor Plan Walkthrough', available: false},
            {feature: '3D Walkthrough', available: false}
        ]
    },
    {
        id: 3,
        name: 'Elite',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: '2D Floor Plan-vasthu', available: true},
            {feature: '3D Elevation', available: true},
            {feature: 'Floor Plan Revision Upto 10 Times', available: true},
            {feature: 'Facade Type - Luxury Design', available: true},
            {feature: 'Structural Design', available: true},
            {feature: 'Electrical Design', available: true},
            {feature: 'Plumbing Design', available: true},
            {feature: 'Furniture Layout', available: true},
            {feature: 'All Detail Drawings', available: true},
            {feature: 'Site Visits by Engineers Upto 2 Times', available: true},
            {feature: '2D Elevation', available: true},
            {feature: '3D Floor Plan Walkthrough', available: true},
            {feature: '3D Walkthrough', available: true}
        ]
    }
]









