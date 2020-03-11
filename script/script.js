$('#nav_item_au').hover(function () {
  $('#nav_link_icon_au').removeClass('fa-sort-down');
  $('#nav_link_icon_au').addClass('fa-sort-up');
});
$('#nav_item_au').mouseleave(function () {
  $('#nav_link_icon_au').removeClass('fa-sort-up');
  $('#nav_link_icon_au').addClass('fa-sort-down');
});

$('#nav_item_alcs').hover(function () {
  $('#nav_link_icon_alcs').removeClass('fa-sort-down');
  $('#nav_link_icon_alcs').addClass('fa-sort-up');
});
$('#nav_item_alcs').mouseleave(function () {
  $('#nav_link_icon_alcs').removeClass('fa-sort-up');
  $('#nav_link_icon_alcs').addClass('fa-sort-down');
});

$('#nav_item_n').hover(function () {
  $('#nav_link_icon_n').removeClass('fa-sort-down');
  $('#nav_link_icon_n').addClass('fa-sort-up');
});
$('#nav_item_n').mouseleave(function () {
  $('#nav_link_icon_n').removeClass('fa-sort-up');
  $('#nav_link_icon_n').addClass('fa-sort-down');
});

var video = document.getElementById("video_banner");
var btn = document.getElementById("btn_banner");

function videobanner() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
$('#nav_item_au_mb').click(function () {
  if ($('#nav_item_au_mb_show').attr('class') == "nav-item-clone-mobile") {
    $('#nav_item_au_mb_show').addClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_au').addClass('fa-sort-up');
    $('#nav_link_icon_au').removeClass('fa-sort-down');
  } else {
    $('#nav_item_au_mb_show').removeClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_au').removeClass('fa-sort-up');
    $('#nav_link_icon_au').addClass('fa-sort-down');
  }

});
$('#nav_item_alcs_mb').click(function () {
  if ($('#nav_item_alcs_mb_show').attr('class') == "nav-item-clone-mobile") {
    $('#nav_item_alcs_mb_show').addClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_alcs').addClass('fa-sort-up');
    $('#nav_link_icon_alcs').removeClass('fa-sort-down');
  } else {
    $('#nav_item_alcs_mb_show').removeClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_alcs').removeClass('fa-sort-up');
    $('#nav_link_icon_alcs').addClass('fa-sort-down');
  }

});
$('#nav_item_n_mb').click(function () {
  if ($('#nav_item_n_mb_show').attr('class') == "nav-item-clone-mobile") {
    $('#nav_item_n_mb_show').addClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_n').addClass('fa-sort-up');
    $('#nav_link_icon_n').removeClass('fa-sort-down');
  } else {
    $('#nav_item_n_mb_show').removeClass('nav-item-clone-mobile_show');
    $('#nav_link_icon_n').removeClass('fa-sort-up');
    $('#nav_link_icon_n').addClass('fa-sort-down');
  }

});

$('#nav_btn_header').click(function () {
  $('#sidebar_mobile').addClass('sidebar_mobile_show');
});
$('#nav_close').click(function () {
  $('#sidebar_mobile').removeClass('sidebar_mobile_show');
});
$('#close_menu_mb').click(function () {
  $('#sidebar_mobile').removeClass('sidebar_mobile_show');
});

$list_mngm = [{
    "link": "image/A_Vu.jpg",
    "name": "Prof. Anh Vu",
    "posc": "PhD Aerospace Eng.",
    "pos": "Chief Scientist",
    "ind": "15+ years of experiences in aerospace design,  aerodynamics analysis, drone and PAV design with 10+ related projects, 30+ related publications, patents, and awards."
  },
  {
    "link": "image/ln.jpg",
    "name": "Prof. Luan Nguyen",
    "posc": "PhD. ECE, Exec MBA",
    "pos": "CEO/President",
    "ind": "35+ years of managerial and technology experiences. 16 years with IBM. 1997-2000 IBM CTO IBM Global Services. Manage successfully many tech companies in US and SE Asia."
  },
  {
    "link": "image/tn.jpg",
    "name": "Mr. Toan Nguyen",
    "posc": "BS Info Technology Eng.",
    "pos": "Chief Technology Officer",
    "ind": "20+ years of experiences in architecting and deploying globally commercial enterprise applications using many advanced technologies."
  },
  {
    "link": "image/ch.jpg",
    "name": "Ms. Chi Hoang",
    "posc": "BS Business Finance",
    "pos": "Chief Financial Officer",
    "ind": "20+ years of experiences in corporate finance and accounting. Managed procurement organizations with an approximate spending of $350M annually. Had taken many executive leading roles such as Corporate Finance/Management Group Manager providing financial support for a Global Finance company, or as Human Resource Finance Manager providing financial support for Corporate HR to include Flash and to commit spending, headcount and reporting, managing the accurate reporting of monthly and quarter financials and forecasts into various information systems."
  },
  {
    "link": "image/ld.jpg",
    "name": "Mr. Liem Doan",
    "posc": "BS Electrical Eng.",
    "pos": "Chief Marketing Officer",
    "ind": "30+ years of aerospace C- level sales and marketing experiences in related commercial, military, and defense products in N.America, Europe, Middle East, Asia, and the Pacific Rim."
  },
  {
    "link": "image/td.jpg",
    "name": "Mr. Trai Dang",
    "posc": "MBA",
    "pos": "VP of Business Development",
    "ind": "An all-round business executive with 6 years of hand-onmanagement experiences, excellent program planning skills, and established large networked connections in the digital economy. Exceptional in running business programs with strong business development ability in grants writings, securing sponsorships, and in organizing other activities that can bring additional stream of revenues to business partnerships."
  },
  {
    "link": "image/vt.jpg",
    "name": "Mr. Viet Tran",
    "posc": "BS E&T Eng.",
    "pos": "Branch Manager, DN Office",
    "ind": "5+ years of experiences in researching and deploying Embedded systems (IoT, ML, Computer Vision). Experiences in developing high- speed / security applications on FPGA and developing secured firmware for Drones and IoT systems / Devices. Exceptional in building and motivating tech teams."
  },
  {
    "link": "image",
    "name": "Prof",
    "posc": "PhD",
    "pos": "Chief",
    "ind": ""
  }

];

function show_profile_mngm(id) {
  $('#image_mngm').attr('src', $list_mngm[id].link);
  $('#name_mngm').text($list_mngm[id].name);
  $('#posc_mngm').text($list_mngm[id].posc);
  $('#pos_mngm').text($list_mngm[id].pos);
  $('#ind_mngm').text($list_mngm[id].ind);
  $('#profile_mngm_oo').css('display', 'flex');
};
$('#profile_btn_mngm').click(function () {
  $('#profile_mngm_oo').css('display', 'none');
})
$('#a_vu').click(function () {
  show_profile_mngm(0);
});
$('#ln_mngm').click(function () {
  show_profile_mngm(1);
});
$('#tn_mngm').click(function () {
  show_profile_mngm(2);
});
$('#ch_mngm').click(function () {
  show_profile_mngm(3);
});
$('#ld_mngm').click(function () {
  show_profile_mngm(4);
});
$('#td_mngm').click(function () {
  show_profile_mngm(5);
});
$('#vt_mngm').click(function () {
  show_profile_mngm(6);
});

$list_adv = [{
    "link": "image/nw.jpg",
    "name": "Nathan Williams",
    "ind": "Nathan Williams is the founder of Minespider, a blockchain platform for tracking conflict-free minerals. Minespider transform supply chain due diligence from a service that is performed into a commodity that is purchased. The company market is roughly 4.25 billion USD and it operates in the 1.7 trillion USD mining industry. He is a Canadian blockchain entrepreneur based in Berlin, Germany. Nathan is founder of NW HinWise Solutions UG, a software development company that builds other companies. He is also founder and managing director of Subvise, a software and automated solutions to assist companies with EU REACH chemical regulation. In Blockchain community, Nathan cohosts an audio show exploring the world of blockchain and crypto for thousands of non-technical subscribers twice a week, called the Analysis in Chains podcast."
  },
  {
    "link": "image/hrn.jpg",
    "name": "Prof. Henry Nguyen, PhD",
    "ind": "Prof. Henry Nguyen is the Vice President of the Global Plant Council organization. He secured over 49 million USD research fund from federal agencies (USDA, NSF, NIH) and billion-dollar industry leaders (Syngenta, Rockefeller, McKnight). He is a Curators' distinguished professor of genetics and earned a Ph.D. in plant breeding and genetics from the University of Missouri, USA. He has served as director of the U.S. National Center for Soybean Biotechnology. He has published more than 260 articles and has contributed 35 book chapters."
  },
  {
    "link": "image/jt.jpg",
    "name": "Jeff Tang",
    "ind": "Jeff Tang is an action-oriented tech professional with perceptive and enthusiastic about life. With more than 10 year experience in the fields of eSports development and user experience enhancement, he is recognized for his ability to observe customer insights and transverse into business opportunities, thus to create innovative business synergies. Jeff is the early investor for an EU company named UltraPlay, which is now the market leader for eSports odds service provider, their product (odds.gg) just awarded as Best B2B Digital Production solution in G2EAsia Macao, 17th May 2018. Graduated with Civil and Structure Engineering in 2001 and Master Degree in Environment Engineering in in 2010 from Nanyang Technological University of Singapore, this shapes Jeff as professionally strong in problem solving with prospective business vision. His strong international perspective across China and the world has led him to develop vertical social network around the world. In addition to his career success, Jeff devotes himself in the community. He has been the president and various positions in the international lions club of Singapore during the last 10 years. Jeff currently is the Co-Founder of CoininAsia and BitAsiaEx, and CEO for BitAsiaEx."
  },
  {
    "link": "image/djw.jpg",
    "name": "Dr Joseph Wang",
    "ind": "Dr. Joseph Wang is chief scientist of Bitquant Research Laboratories, a small Hong Kong-based financial technology research laboratory. Bitquant does research and consulting in crypto hedge funds, and ICO's. It also participates in small high-tech lending, Africa trading, digital currency derivatives, blockchain, and financial regulation analysis. Dr. Wang is also attempting to link the financial and physics communities to fix the financial system that died in 2008 and to get humanity off of the planet. Dr. Wang holds a Ph.D. in computational astrophysics from the University of Texas at Austin and a bachelor of physics from MIT. Before leaving to focus on promoting entrepreneurship and advanced technology in Hong Kong, he worked as vice-president in the quantitative research division of JPMorgan both in Hong Kong and at its corporate headquarters in New York City. Dr. Wang also has done direct software developments in both Forture 500 and small startup companies in the Silicon Hills region of Central Texas."
  },
  {
    "link": "image/rs.jpg",
    "name": "Richard Seow",
    "ind": "Richard is Director at SBI E2 Family Advisors. He has more than 25 years of Commercial Leadership, Innovation and Entrepreneurial Business Development experience having successfully led global, multi-disciplinary teams across numerous Fortune 500 as well as Venture, PE and Listed companies. Prior to SBI E2 Family Advisors, he was the VP at Carlton James Group, an UK Private Equity in Commercial Real Estate. He was also the VP of Asia Sales with Emerson Corporation’s Network Power. Past endeavors also include leading Asia Sales & Marketing at SMART Modular Technologies (acquired by Silver Lake Partners from TPG Capital). Previously, he also served as General Manager of Kyocera Corporation's Interconnect Products and General Manager of Solectron's subsidiary (Acquired by Flextronics). Richard also held senior management positions at IBM Microelectronics as Singapore Country Manager, Freescale Semiconductor (Acquired by NXP) and AT&T Corporation.Richard is Director at SBI E2 Family Advisors. He has more than 25 years of Commercial Leadership, Innovation and Entrepreneurial Business Development experience having successfully led global, multi-disciplinary teams across numerous Fortune 500 as well as Venture, PE and Listed companies. Prior to SBI E2 Family Advisors, he was the VP at Carlton James Group, an UK Private Equity in Commercial Real Estate. He was also the VP of Asia Sales with Emerson Corporation’s Network Power. Past endeavors also include leading Asia Sales & Marketing at SMART Modular Technologies (acquired by Silver Lake Partners from TPG Capital). Previously, he also served as General Manager of Kyocera Corporation's Interconnect Products and General Manager of Solectron's subsidiary (Acquired by Flextronics). Richard also held senior management positions at IBM Microelectronics as Singapore Country Manager, Freescale Semiconductor (Acquired by NXP) and AT&T Corporation."
  },
  {
    "link": "image/jsb.jpg",
    "name": "Prof. John Sibley Butler, PhD",
    "ind": "Professor John Sibley Butler holds the Gale Chair in Entrepreneurship and Small Business in the Graduate School of Business (Department of Management). He is the Director of the Herb Kelleher Center for Entrepreneurship and from 2002 to 2013 was Director of the IC² Institute, where he continues to serve as Research Fellow. His research is in the areas of organizational behavior and new venture development. Professor Butler has served as a consultant for many firms and the U.S. military. At this time he is Management Consultant for State Farm Insurance Companies, with corporate headquarters in Bloomington, Illinois. He is also one of the distinguished professors who compose the Advisory Team of Governor George Bush’s 2000 Presidential Campaign. His books and monographs include Framework for Research on Leadership, Cohesion, and Values; Entrepreneurship and Self-Help Among Black Americans: A Reconsideration of Race and Economics; All That We Can Be: Black Leadership and Racial Integration the Army Way (with Charles C. Moskos – winner of the Washington Monthly Best Book Award); and Immigrant and Minority Entrepreneurship: The Continuous Rebirth of American Communities (with George Kozmetsky, forthcoming). Professor Butler received his undergraduate education from Louisiana State University in Baton Rouge and the Ph.D. from Northwestern University in Evanston, Illinois. He is a decorated Vietnam Veteran."
  },
  {
    "link": "image/stdr.jpg",
    "name": "Prof. Satyendra Rana, PhD",
    "ind": "Highly accomplished and award-winning IT Executive and Corporate Officer with extensive record of success in product management, professional services, global program management, and startup operations. Special expertise in Big data solutions, high performance computing, strategic planning, business-IT alignment, business transformation, change management, service-oriented architecture (SOA), and process innovation. Proven ability to deliver major revenue growth by managing IT to create business value. Knowledgeable in eSCM, Prince 2, CMM, COBIT, and ITIL methodologies and requirements. Strong technical background. Excellent problem-solving, relationship management, and academic instruction skills. Expert in specialties such as Big Data Solutions, High Performance Computing, and IT Governance. Responsible for design and development of DIWO- A Cognitive Analytics Solutions Platform. Vice President – Marketing and Business Development at TATA CRL (Acquired by TCS): Responsible for developing and crystalizing Tata CRL’s strategic positioning in the HIgh Performance Computing space; leading company’s ecosystem development strategy, managing and establishing strategic partnerships, developing executive relationships in creating joint solutions and marketing programs to drive new sources of revenue; leading all aspects of marketing and solutions management, developing and executing long and short range marketing strategies to ensure growth in profit and market share; responsible for expansion of Tata CRL business worldwide by establishing public HPC clouds in various geographies. CTO and Co-Founder of Exterprise: Following acquisition of Exterprise by Commerce One (a $20B global B2B products and services technology company), assumed its CTO role and oversaw 300 direct and indirect reports. Formulated technology roadmap and strategy. Led development of corporate architecture and web-based solutions. Managed partner relationships. Directed successful integration of Exterprise and Commerce One products and technologies, resulting in unified product suite for B2B eCommerce networks. Earned Premier CTO of the Year 2000 Award from ComputerWorld Magazine. Recognized with National Business Incubators Association Award for Founder of Best Software Company of the Year (2000). Defined and maintained standard solutions for Distributed Systems Services Management, for use by IBM Solution Delivery centers worldwide. Member of review team that approved RFPs and pricing models. Was key contact point between IBM Research and IBM Managed Operations while at IBM, facilitating technology transfer in CRM and related areas. Faculty Member in Computer Science at Indian Institute of Technology, Delhi January 1980 – December 1985 (6 years), Established the B.Tech program in Computer Science and Engineering in cohort with other four IIT’s in India."
  }
];

function show_profile_adv(id) {
  $('#image_adv').attr('src', $list_adv[id].link);
  $('#name_adv').text($list_adv[id].name);
  $('#ind_adv').text($list_adv[id].ind);
  $('#profile_adv_oo').css('display', 'flex');
}

$('#profile_btn_adv').click(function () {
  $('#profile_adv_oo').css('display', 'none');
})
$('#hrn_adv').click(function () {
  show_profile_adv(1);
});
$('#nw_adv').click(function () {
  show_profile_adv(0);
});
$('#jt_adv').click(function () {
  show_profile_adv(2);
});
$('#djw_adv').click(function () {
  show_profile_adv(3);
});
$('#rs_adv').click(function () {
  show_profile_adv(4);
});
$('#jsb_adv').click(function () {
  show_profile_adv(5);
});
$('#stdr_adv').click(function () {
  show_profile_adv(6);
});