import React from "react";
import "../css/expertise.css";

const sectors = [
  { icon: "/icons/heart-pulse.svg", 
    name: "Health Care" ,
    text :"HIPAA-aware technology solutions, AI diagnostics support, digital health infrastructure "
  },
  { icon: "/icons/gear.svg", 
    name: "Manufacturing Sector" ,
    text :"Smart automation, predictive maintenance, ERP integration, supply chain intelligence "
  },
  { icon: "/icons/financial.svg", 
    name: "Financial Services" ,
    text :"Secure data management, compliance-ready architecture, AI-powered analytics"
  },
  { icon: "/icons/retail.svg", 
    name: "Retail" ,
    text :"POS build and support, Omnichannel infrastructure, real-time analytics, customer intelligence platforms "
  },
  { icon: "/icons/government.svg", 
    name: "Government Agencies" ,
    text :"Secure hosting, data sovereignty, mission-critical system managemen"
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section">
      <div className="container-fluid"> {/* ✅ Make container fluid */}
        <h2 className="expertise-title text-center"> {/* ✅ Centered title */}
          Expertise In Sectors
        </h2>

        <div className="row g-5 justify-content-center expertise-cards">
          {sectors.map((sector, index) => (
            <div className="col-6 col-md-2" key={index}> {/* Adjust column width if needed */}
              <div className="sector-card">
                <img
                  src={sector.icon}
                  alt={sector.name}
                  className="sector-icon"
                />
                <p>{sector.name}</p>
                <p>{sector.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;




// import React from "react";
// import "../css/expertise.css";


// const sectors = [
//   { icon: "/icons/heart-pulse.svg", name: "Health Care" },
//   { icon: "/icons/gear.svg", name: "Manufacturing Sector" },
//   { icon: "/icons/financial.svg", name: "Financial Services" },
//   { icon: "/icons/retail.svg", name: "Retail" },
//   { icon: "/icons/government.svg", name: "Government Agencies" },
// ];

// const Expertise = () => {
//   return (
//     <section id="expertise" className="expertise-section">
//       <div className="container">
//         <h2 className="expertise-title">Expertise In Sectors</h2>

//         {/* <div className="row g-4 justify-content-center"> */}
//         <div className="row g-5 justify-content-center">
//           {sectors.map((sector, index) => (
//             <div className="col-6 col-md" key={index}>
//               <div className="sector-card">
//                 <img
//                   src={sector.icon}
//                   alt={sector.name}
//                   className="sector-icon"
//                 />
//                 <p>{sector.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Expertise;



