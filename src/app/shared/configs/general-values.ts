export const MAIN_LINKS = [
    {
        id:1,
        label:'Home',
        parent:'',
        children:[],
        shouldRoute:true,
        url:'/'
    },
    {
        id:2,
        label:'About',
        parent:'',
        children:[3, 4, 5, 6, 7],
        shouldRoute:false,
        url:'#'
    },
    {
        id:3,
        label:'About Us',
        parent:2,
        children:[],
        shouldRoute:true,
        url:'/about-us'
    },
    {
        id:4,
        label:'Vision',
        parent:2,
        children:[],
        shouldRoute:true,
        url:'/vision'
    },
    {
        id:5,
        label:'Mission',
        parent:2,
        children:[],
        shouldRoute:true,
        url:'/mission'
    },
    {
        id:6,
        label:'Our Core Values',
        parent:2,
        children:[],
        shouldRoute:true,
        url:'/values'
    },
    {
        id:7,
        label:'Message from Managing Director',
        parent:2,
        children:[],
        shouldRoute:true,
        url:'/message'
    },
    {
        id:8,
        label:'Services',
        parent:'',
        children:[9, 10, 11],
        shouldRoute:false,
        url:'#'
    },
    {
        id:9,
        label:'Electrical',
        parent: 8,
        children:[],
        shouldRoute:true,
        url:'/electrical'
    },
    {
        id:10,
        label:'Plumbing',
        parent: 8,
        children:[],
        shouldRoute:true,
        url:'/plumbing'
    },
    {
        id:11,
        label:'Mechanical',
        parent: 8,
        children:[],
        shouldRoute:true,
        url:'/mechanical'
    },
    {
        id:12,
        label:'Projects',
        parent:'',
        children:[13,14],
        shouldRoute:false,
        url:'#'
    },
    {
        id:13,
        label:'Completed Projects',
        parent:12,
        children:[],
        shouldRoute:true,
        url:'/completed-projects'
    },
    {
        id:14,
        label:'Ongoing Projects',
        parent:12,
        children:[],
        shouldRoute:true,
        url:'/ongoing-projects'
    },
    {
        id:15,
        label:'Clients',
        parent:'',
        children:[],
        shouldRoute:true,
        url:'/clients'
    },
    {
        id:16,
        label:'Contact Us',
        parent:'',
        children:[],
        shouldRoute:true,
        url:'/contact-us'
    }

] 


export const CLIENTS_LIST = [
    {
        label:'DRA',
        image:'dra-logo.svg'
    },
    {
        label:'TVS EMARALD',
        image:'tvs-emarald-logo.png'
    },
    {
        label:'Sidharth',
        image:'sidharth-logo.png'
    },
    {
        label:'Sristi',
        image:'sristi-logo.png'
    },
    {
        label:'Swastik Gem',
        image:'swastik-gem-logo.png'
    },
    {
        label:'Atyant Capital',
        image:'atyant-capital-logo.png'
    },
];

export const SERVICES_LIST = [
        {
          title: "Electrical Expertise",
          image:"Electrician.svg",
          description: "At Evans Engineering, our team of skilled and fully qualified electricians specializes in electrical installations, maintenance, and repairs. With extensive experience spanning residential, commercial, and industrial projects, we deliver exceptional service tailored to your specific needs."
        },
        {
          title: "Leading Electrical Contractor in Chennai",
          image:"Vector.svg",
          description: "As one of Chennai’s leading electrical contractors, we are dedicated to providing innovative, safe, and high-quality electrical solutions for a variety of buildings, including residential complexes, commercial spaces, and industrial facilities."
        },
        {
          title: "Customer Focus",
          image:"shield.png",
          description: "Customer safety and satisfaction are at the heart of everything we do. We ensure our electrical services are reliable, efficient, and perfectly suited to your requirements. Choose Evans Engineering for trusted and dependable electrical expertise!"
        }
]

export const COMPLETED_PROJECTS = [
    { name: "DRA HOMES", project: "D ELITE" },
    { name: "DRA HOMES", project: "TRULIV PORUR" },
    { name: "DRA HOMES", project: "AADHITYA OFFICE BUILDING" },
    { name: "TVS EMERALD HAVEN", project: "PENINSULA" },
    { name: "TVS EMERALD HAVEN", project: "AARANYA PHASE - 1 VILLA" },
    { name: "SRISTI BUILDERS", project: "ARUNACHALA" }
];

export const ONGOING_PROJECTS = [
    { name: "DRA HOMES", project: "HARMONY" },
    { name: "SIDHARTH FOUNDATION", project: "SQUARE" },
    { name: "TVS EMERALD HAVEN", project: "AARANYA PHASE - 2 VILLA" },
    { name: "ATYANT CAPITAL", project: "COMMERCIAL BUILDING" }
];