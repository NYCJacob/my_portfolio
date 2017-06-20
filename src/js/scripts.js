(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.fixed-top',
        offset: 60
    });

    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('#collapsingNavbar li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggler:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });


    // added functions
    var resumeJson = {
        "basics": {
            "name": "Jacob Sherman",
            "label": "Full Stack Developer/Linux Systems Admin at Jacob Sherman, Developer",
            "phone": "",
            "website": "",
            "summary": "After many years of practicing law, I have recently migrated to front-end web development and dedicated the last two years advancing my web development skills.  I have a keen interest in privacy and cybersecurity issues.\n\nFluent Spanish and forgetting my Japanese.",
            "location": {
                "address": "",
                "postalCode": "",
                "city": "",
                "countryCode": "",
                "region": ""
            },
            "profiles": []
        },
        "work": [
            {
                "company": "Ethoshopper Inc.",
                "position": "Owner",
                "website": "",
                "startDate": "undefined-2010-01",
                "summary": "- Developed e-commerce website based on OSCommerce platform\n- Sourced and imported hand-made good around the world, especially South America",
                "highlights": [],
                "endDate": "2012-12-01"
            },
            {
                "company": "Bingham McCutchen",
                "position": "Attorney",
                "website": "",
                "startDate": "undefined-2003-01",
                "summary": "- Managed discover as part of the quality control team for multiparty multinational litigation.\n- Assisted Japanese translators with U.S. legal translations using my knowledge of Japanese.",
                "highlights": [],
                "endDate": "undefined-2005-01"
            },
            {
                "company": "Wilens and Baker",
                "position": "New York Attorney",
                "website": "",
                "startDate": "undefined-2001-01",
                "summary": "- Handled high volume caseload of immigration and criminal matters specializing in immigration court litigation.\n- Managed cases from intake to completion in a bilingual work environment.",
                "highlights": [],
                "endDate": "undefined-2002-01"
            },
            {
                "company": "Jacob Sherman, Developer",
                "position": "Full Stack Developer, Linux Systems Admin",
                "website": "",
                "startDate": "2015-01-01",
                "summary": "- Administering websites on CentOS and Ubuntu systems including installation scripts, intrusion monitoring, and usage limits.\n- Using Amazon Web Services and Heroku for on-demand provisioning and testing.",
                "highlights": []
            },
            {
                "company": "Pena & Kahn, PLLC",
                "position": "Managing Attorney",
                "website": "",
                "startDate": "2012-04-01",
                "summary": "- Managed a 10 person law office busy local office handling immigration, criminal, and family matters.\n- Increased revenue by 50% by diversifying types of issue handled and streamlined case management.",
                "highlights": [],
                "endDate": "2013-11-01"
            },
            {
                "company": "Jacob Sherman, Attorney",
                "position": "New York Attorney",
                "website": "",
                "startDate": "1997-01-01",
                "summary": "Developed a diverse legal practice handling immigration, criminal and civil litigation matters.",
                "highlights": [],
                "endDate": "2001-03-01"
            }
        ],
        "education": [
            {
                "institution": "Isenberg School of Management, UMass Amherst",
                "area": "",
                "studyType": "BS",
                "startDate": "1983-01-01",
                "gpa": "",
                "courses": [],
                "endDate": "1988-01-01"
            },
            {
                "institution": "Universidad Pontificia Bolivariana",
                "area": "",
                "studyType": "Spanish",
                "startDate": "2007-01-01",
                "gpa": "",
                "courses": [],
                "endDate": "2007-01-01"
            },
            {
                "institution": "University of Buenos Aires",
                "area": "",
                "studyType": "Certificate",
                "startDate": "2004-01-01",
                "gpa": "",
                "courses": [],
                "endDate": "2004-01-01"
            },
            {
                "institution": "Udacity",
                "area": "",
                "studyType": "Front-End Developer Nanodegree",
                "startDate": "2016-01-01",
                "gpa": "",
                "courses": [],
                "endDate": "2017-01-01"
            },
            {
                "institution": "Sophia University",
                "area": "",
                "studyType": "Japanese Language Studies",
                "startDate": "1988-01-01",
                "gpa": "",
                "courses": [],
                "endDate": "1990-01-01"
            },
            {
                "institution": "Syracuse University College of Law",
                "area": "",
                "studyType": "JD",
                "startDate": "1991-01-01",
                "gpa": "",
                "courses": [],
                "endDate": "1995-01-01"
            }
        ],
        "skills": [
            {
                "name": "Commercial Litigation",
                "level": "",
                "keywords": []
            },
            {
                "name": "Legal Research",
                "level": "",
                "keywords": []
            },
            {
                "name": "Courts",
                "level": "",
                "keywords": []
            },
            {
                "name": "Legal Assistance",
                "level": "",
                "keywords": []
            },
            {
                "name": "Licensing",
                "level": "",
                "keywords": []
            },
            {
                "name": "Corporate Law",
                "level": "",
                "keywords": []
            },
            {
                "name": "Trademarks",
                "level": "",
                "keywords": []
            },
            {
                "name": "Copyright Law",
                "level": "",
                "keywords": []
            },
            {
                "name": "Contract Negotiation",
                "level": "",
                "keywords": []
            },
            {
                "name": "Linux System Administration",
                "level": "",
                "keywords": []
            },
            {
                "name": "Back-End Web Development",
                "level": "",
                "keywords": []
            },
            {
                "name": "Programming Languages",
                "level": "",
                "keywords": []
            },
            {
                "name": "Front-end Development",
                "level": "",
                "keywords": []
            },
            {
                "name": "Litigation",
                "level": "",
                "keywords": []
            },
            {
                "name": "Immigration Law",
                "level": "",
                "keywords": []
            },
            {
                "name": "Intellectual Property",
                "level": "",
                "keywords": []
            },
            {
                "name": "Civil Litigation",
                "level": "",
                "keywords": []
            },
            {
                "name": "Legal Writing",
                "level": "",
                "keywords": []
            },
            {
                "name": "Criminal Law",
                "level": "",
                "keywords": []
            }
        ],
        "languages": [
            {
                "language": "English",
                "fluency": "Native or bilingual"
            },
            {
                "language": "Spanish",
                "fluency": "Professional working"
            },
            {
                "language": "Japanese",
                "fluency": "Elementary"
            }
        ],
        "interests": [
            {
                "name": "programming",
                "keywords": []
            },
            {
                "name": " travel",
                "keywords": []
            },
            {
                "name": " photography",
                "keywords": []
            },
            {
                "name": " other cultures",
                "keywords": []
            }
        ],
        "references": [],
        "projects": [
            {
                "name": "Neighborhood Map",
                "startDate": "2017-01-01",
                "summary": "- Incorporated multiple API sources to create an interactive map using MVC framework.\n- Designed application as a  mobile first responsive single page web application.",
                "url": "https://github.com/NYCJacob/neighborhood_map",
                "endDate": "2017-02-01"
            },
            {
                "name": "Webesq",
                "startDate": "2015-01-01",
                "summary": "- Developed a PHP/Javascipt web application that generates PDF documents for filing an uncontested divorce in New York City.\n- Used extensive input validation and encryption techniques to ensure accurate data and user privacy.\n- Front-end is being redesigned for a better user experience.",
                "url": "https://www.webesq.net"
            }
        ]
    };

    $('#resumeJson').jsonpanel({data: {
                "name": "Jacob Sherman",
                "label": "Full Stack Developer/Linux Systems Admin at Jacob Sherman, Developer",
                "phone": "",
                "website": "",
                "summary": "After many years of practicing law, I have recently migrated to front-end web development and dedicated the last two years advancing my web development skills.  I have a keen interest in privacy and cybersecurity issues.\n\nFluent Spanish and forgetting my Japanese.",
                "location": {
                    "address": "",
                    "postalCode": "",
                    "city": "",
                    "countryCode": "",
                    "region": ""
                },
            "work": [
                {
                    "company": "Ethoshopper Inc.",
                    "position": "Owner",
                    "website": "",
                    "startDate": "undefined-2010-01",
                    "summary": "- Developed e-commerce website based on OSCommerce platform\n- Sourced and imported hand-made good around the world, especially South America",
                    "highlights": [],
                    "endDate": "2012-12-01"
                },
                {
                    "company": "Bingham McCutchen",
                    "position": "Attorney",
                    "website": "",
                    "startDate": "undefined-2003-01",
                    "summary": "- Managed discover as part of the quality control team for multiparty multinational litigation.\n- Assisted Japanese translators with U.S. legal translations using my knowledge of Japanese.",
                    "highlights": [],
                    "endDate": "undefined-2005-01"
                },
                {
                    "company": "Wilens and Baker",
                    "position": "New York Attorney",
                    "website": "",
                    "startDate": "undefined-2001-01",
                    "summary": "- Handled high volume caseload of immigration and criminal matters specializing in immigration court litigation.\n- Managed cases from intake to completion in a bilingual work environment.",
                    "highlights": [],
                    "endDate": "undefined-2002-01"
                },
                {
                    "company": "Jacob Sherman, Developer",
                    "position": "Full Stack Developer, Linux Systems Admin",
                    "website": "",
                    "startDate": "2015-01-01",
                    "summary": "- Administering websites on CentOS and Ubuntu systems including installation scripts, intrusion monitoring, and usage limits.\n- Using Amazon Web Services and Heroku for on-demand provisioning and testing.",
                    "highlights": []
                },
                {
                    "company": "Pena & Kahn, PLLC",
                    "position": "Managing Attorney",
                    "website": "",
                    "startDate": "2012-04-01",
                    "summary": "- Managed a 10 person law office busy local office handling immigration, criminal, and family matters.\n- Increased revenue by 50% by diversifying types of issue handled and streamlined case management.",
                    "highlights": [],
                    "endDate": "2013-11-01"
                },
                {
                    "company": "Jacob Sherman, Attorney",
                    "position": "New York Attorney",
                    "website": "",
                    "startDate": "1997-01-01",
                    "summary": "Developed a diverse legal practice handling immigration, criminal and civil litigation matters.",
                    "highlights": [],
                    "endDate": "2001-03-01"
                }
            ],
            "education": [
                {
                    "institution": "Isenberg School of Management, UMass Amherst",
                    "area": "",
                    "studyType": "BS",
                    "startDate": "1983-01-01",
                    "gpa": "",
                    "courses": [],
                    "endDate": "1988-01-01"
                },
                {
                    "institution": "Universidad Pontificia Bolivariana",
                    "area": "",
                    "studyType": "Spanish",
                    "startDate": "2007-01-01",
                    "gpa": "",
                    "courses": [],
                    "endDate": "2007-01-01"
                },
                {
                    "institution": "University of Buenos Aires",
                    "area": "",
                    "studyType": "Certificate",
                    "startDate": "2004-01-01",
                    "gpa": "",
                    "courses": [],
                    "endDate": "2004-01-01"
                },
                {
                    "institution": "Udacity",
                    "area": "",
                    "studyType": "Front-End Developer Nanodegree",
                    "startDate": "2016-01-01",
                    "gpa": "",
                    "courses": [],
                    "endDate": "2017-01-01"
                },
                {
                    "institution": "Sophia University",
                    "area": "",
                    "studyType": "Japanese Language Studies",
                    "startDate": "1988-01-01",
                    "gpa": "",
                    "courses": [],
                    "endDate": "1990-01-01"
                },
                {
                    "institution": "Syracuse University College of Law",
                    "area": "",
                    "studyType": "JD",
                    "startDate": "1991-01-01",
                    "gpa": "",
                    "courses": [],
                    "endDate": "1995-01-01"
                }
            ],
            "skills": [
                {
                    "name": "Commercial Litigation",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Legal Research",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Courts",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Legal Assistance",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Licensing",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Corporate Law",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Trademarks",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Copyright Law",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Contract Negotiation",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Linux System Administration",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Back-End Web Development",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Programming Languages",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Front-end Development",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Litigation",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Immigration Law",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Intellectual Property",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Civil Litigation",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Legal Writing",
                    "level": "",
                    "keywords": []
                },
                {
                    "name": "Criminal Law",
                    "level": "",
                    "keywords": []
                }
            ],
            "languages": [
                {
                    "language": "English",
                    "fluency": "Native or bilingual"
                },
                {
                    "language": "Spanish",
                    "fluency": "Professional working"
                },
                {
                    "language": "Japanese",
                    "fluency": "Elementary"
                }
            ],
            "interests": [
                {
                    "name": "programming",
                    "keywords": []
                },
                {
                    "name": " travel",
                    "keywords": []
                },
                {
                    "name": " photography",
                    "keywords": []
                },
                {
                    "name": " other cultures",
                    "keywords": []
                }
            ],
            "references": [],
            "projects": [
                {
                    "name": "Neighborhood Map",
                    "startDate": "2017-01-01",
                    "summary": "- Incorporated multiple API sources to create an interactive map using MVC framework.\n- Designed application as a  mobile first responsive single page web application.",
                    "url": "https://github.com/NYCJacob/neighborhood_map",
                    "endDate": "2017-02-01"
                },
                {
                    "name": "Webesq",
                    "startDate": "2015-01-01",
                    "summary": "- Developed a PHP/Javascipt web application that generates PDF documents for filing an uncontested divorce in New York City.\n- Used extensive input validation and encryption techniques to ensure accurate data and user privacy.\n- Front-end is being redesigned for a better user experience.",
                    "url": "https://www.webesq.net"
                }
            ]
        }
    });

})(jQuery);