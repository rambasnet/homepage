import React from 'react';

class Publication extends React.Component {
  constructor(props) {
    super(props);
    this.state =
    {
      pub:
        [
          {
            title: 'Towards Detecting and Classifying Malicious URLs Using Deep Learning',
            url: 'http://isyou.info/jowua/papers/jowua-v11n4-3.pdf',
            author: "C. Johnson, B. Khadka, R. B. Basnet, and T. Doleck",
            pub_info: "Journal of Wireless Mobile Networks, Ubiquitous Computing, and Dependable Applications (JoWUA), 11(4):31-48, Dec. 2020 DOI:10.22667/JOWUA.2020.12.31.031"
          },
          {
            title: "Fearing the Robot Apocalypse: Correlates of AI Anxiety",
            url: "https://www.online-journals.org/index.php/i-jai/article/view/16759",
            author: "D. J. Lemay, R. B. Basnet, and T. Doleck",
            pub_info: "iJAI - International Journal of Learning Analytics and Artificial Intelligence for Education, Vol. 2, No. 2, pp. 24-33, Aug. 2020"
          },
          {
            title: "Examining the Relationship between Threat and Coping Appraisal in Phishing Detection among College Students",
            url: "http://isyou.info/jisis/vol10/no1/jisis-2020-vol10-no1-03.pdf",
            author: "D.J. Lemay, R.B. Basnet, and T. Doleck",
            pub_info: "Journal of Internet Services and Information Security, Vol. 10, No. 1, pp. 38-49, Mar. 2020"
          },
          {
            title: "Towards Detecting and Classifying Network Intrusion Traffic Using Deep Learning Frameworks",
            url: "http://isyou.info/jisis/vol9/no4/jisis-2019-vol9-no4-01.pdf",
            author: "R.B. Basnet, R. Shash, C. Johnson, L. Walgren, and T. Doleck",
            pub_info: "Journal of Internet Services and Information Security, Vol. 9, No. 4, pp. 1-17, Nov. 2019"
          },
          {
            title: "Predictive analytics in education - a comparison of deep learning frameworks",
            url: process.env.PUBLIC_URL + "/pdfs/DeepLearningEducation.pdf",
            author: "T. Doleck, D.J. Lemay, R.B. Basnet, and P. Bazelais",
            pub_info: "Education and Inforamtion Technologies, SpringerLink, pp. 1-13, Nov. 2019"
          },
          {
            title: "Social network analysis of twitter use during the AERA 2017 annual conference",
            url: process.env.PUBLIC_URL + "/pdfs/TwitterAERA2017.pdf",
            author: "D.J. Lemay, R.B. Basnet, T. Doleck, and P. Bazelais",
            pub_info: "Education and Information Technologies, Springer US 24(1) 459-470, Jan. 2019"
          },
          {
            title: "Developing Next Generation of Innovators - Teaching Entrepreneurial Mindset Elements across Disciplines",
            url: "http://www.sciedu.ca/journal/index.php/ijhe/article/view/13967/8797",
            author: "L.S. Nadelson, A. Palmer, T. Benton, R. Basnet, M. Bissonette, et al.",
            pub_info: "International Journal of Higher Education, Sept. 2018"
          },
          {
            title: "Exploring Bimodality in Introductory Computer Science Performance Distributions",
            url: process.env.PUBLIC_URL + "/pdfs/ExploringBimodality.pdf",
            author: "R.B. Basnet, L.K. Payne, T. Doleck, D.J. Lemay, and P. Bazelais",
            pub_info: "EURASIA Journal of Mathematics, Science and Technology Education, July 2018, 14(10)"
          },
          {
            title: "Exploring computer science students' continuance intentions to use Kattis",
            url: process.env.PUBLIC_URL + "/pdfs/kattis.pdf",
            author: "R.B. Basnet, T.Doleck, D.J. Lemay, and P. Bazelais",
            pub_info: "Journal of Computers in Education, Springer, Oct. 2017"
          },
          {
            title: "Algorithmic thinking, cooperativity, creativity, critical thinking, and problem solving - exploring the relationship between computational thinking skills and academic performance",
            url: process.env.PUBLIC_URL + "/pdfs/ComputationalThinking.pdf",
            author: "T. Doleck, P. Bazelais, D.J. Lemay, A. Saxena, and R.B. Basnet",
            pub_info: "Journal of Computers in Education, Springer, Aug. 2017"
          },
          {
            title: "Mining learner-system interaction data- implications for modeling learner behaviors and improving overlay models",
            url: process.env.PUBLIC_URL + "/pdfs/ModelingLearnerBehaviors.pdf",
            author: "T. Doleck, R. Basnet, E. Poitras, and S. Lajoie",
            pub_info: "Journal of Computers in Education, Springer, Aug. 2015"
          },
          {
            title: "Towards examining learner behaviors in a medical intelligent tutoring system - A Hidden Markov Model approach",
            url: process.env.PUBLIC_URL + "/pdfs/IEEEIACC_HMM.pdf",
            author: "T. Doleck, R. Basnet, E. Poitras, S. Lajoie",
            pub_info: "In Proc. of the 2015 IEEE International Conference on Advance Computing Conference (IACC 2015), June 2015, Banglore, India"
          },
          {
            title: "The Critical Feature Dimension and Critical Sampling Problems",
            url: "https://www.researchgate.net/publication/282953973_The_Critical_Feature_Dimension_and_Critical_Sampling_Problems",
            author: "B. M. Ribeiro, A. Sung, D. Suryakumar, and R. Basnet",
            pub_info: "In Proc. of the International Conference on Pattern Recognition Applications and Methods (ICPRAM 2015), January 2015, Lisbon, Protugal."
          },
          {
            title: "Towards Developing a Tool to Detect Phishing URLs- A Machine Learning Approach",
            url: process.env.PUBLIC_URL + "/pdfs/IEEECICTPhishingTools.pdf",
            author: "Basnet, R.B. and Doleck, T.",
            pub_info: "In Proc. of 2015 IEEE International Conference on Computational Intelligence & Communication Technology (CICT), Feb. 2015"
          },
          {
            title: "Exploring the Link Between Initial and Final Diagnosis in a Medical Intelligent Tutoring System",
            url: process.env.PUBLIC_URL + "/pdfs/ExploringLinkMedical.pdf",
            author: "Doleck, T., Basnet, R. B., Poitras, E., and Lajoie, S.",
            pub_info: "In Proc. of IEEE International Conference on MOOC, Innovation and Technology in Education (MITE)  India IEEE 2014"
          },
          {
            title: "BioWorldParser - A Suite of Parsers for Leveraging Educational Data Mining Techniques",
            url: process.env.PUBLIC_URL + "/pdfs/BioWorldParser.pdf",
            author: "Doleck, T., Basnet, R. B., Poitras, E., and Lajoie, S.",
            pub_info: "In Proc. of IEEE International Conference on MOOC, Innovation and Technology in Education (MITE)</i>, India, IEEE, 2014"
          },
          {
            title: "Augmenting the Novice-Expert Overlay Model in an Intelligent Tutoring System - Using Confidence-Weighted Linear Classifiers",
            url: process.env.PUBLIC_URL + "/pdfs/LearnersBehaviorsCWLC.pdf",
            author: "Tenzin Doleck, Ram B. Basnet, Eric Poitras and Susan Lajoie",
            pub_info: "In Proceedings of IEEE International Conference on Computational Intelligence & Computing Research (ICCIC), Tamil Nadu, India, 2014."
          },
          {
            title: "Learning to Detect Phishing Webpages",
            url: "http://isyou.info/jisis/vol4/no3/jisis-2014-vol4-no3-02.pdf",
            author: "Ram B. Basnet and Andrew H. Sung",
            pub_info: "JISIS - Journal of Internet Services and Information Security, pp. 21-39, Vol. 3, No. 4, August, 2014"
          },
          {
            title: "Learning to Detect Phishing URLs",
            url: process.env.PUBLIC_URL + "/pdfs/IJRET_PhishingURLs.pdf",
            author: "Ram B. Basnet, Andrew H. Sung, and Quingzhong Liu",
            pub_info: "IJRET - International Journal of Research in Engineering and Technology, Vol. 3, Issue 6, June 2014"
          },
          {
            title: "Mining Web to Detect Phishing URLs",
            url: process.env.PUBLIC_URL + "/pdfs/MiningWebToDetectPhishingURLs.pdf",
            author: "Ram B. Basnet and Andrew H. Sung",
            pub_info: "In Proc. of the 11th International Conference on Machine Learning and Applications (ICMLA), pp. 568-573. Boca Raton, FL, USA 2012"
          },
          {
            title: "Feature Selection for Improved Phishing Detection",
            url: process.env.PUBLIC_URL + "/pdfs/FeatureSelectionForImprovedPhishingDetection.pdf",
            author: "Ram B. Basnet, Andrew H. Sung, and Quingzhong Liu",
            pub_info: "In Proc. of the 25th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems (IEA/AIE 2012), pp. 252-261. Dalian, China, Jun. 2012"
          },
          {
            title: "Rule-Based Phishing Attack Detection",
            url: process.env.PUBLIC_URL + "/pdfs/RuleBasedPhishingAttackDetection.pdf",
            author: "Ram B. Basnet, Andrew H. Sung, and Quingzhong Liu",
            pub_info: "In Proc. of the International Conference on Security and Management-SAM'11, pp. 624-630, Las Vegas, NV, USA, Jul. 2011"
          },
          {
            title: "Classifying Phishing Emails Using Confidence-Weighted Linear Classifiers",
            url: process.env.PUBLIC_URL + "/pdfs/PhishingEmailCWLC.pdf",
            author: "Ram B. Basnet and Andrew H. Sung",
            pub_info: "In Proc. of the International Conference on Information Security and Artificial Intelligence (ISAI 2010), Vol. 1, pp. 108-112. Chengdu, China, Dec. 2010"
          },
          {
            title: "Event Detection and Localization Using Sensor Networks",
            url: process.env.PUBLIC_URL + "/pdfs/EventDetectionAndLocalizationUsingSensorNetworks.pdf",
            author: "Ram B. Basnet and Srinivas Mukkamala",
            pub_info: "In Proc. of International Conference on Wireless Networks, Vol. II, pp. 103-108, Las Vegas, Nevada, USA, Jul. 2009"
          },
          {
            title: "A Similarity Measure for Clustering and its Applications",
            url: "pdfs/ClusteringSimilarityAndItsApplications.pdf",
            author: "Guadalupe J. Torres, Ram B. Basnet, Andrew H. Sung, and Srinivas Mukkamala",
            pub_info: "In Proc. of World Academy of Science, Engineering and Technology, Vol. 31, ISSN 1307-6884, pp.490-496, Vienna, Austria, July 2008."
          },
          {
            title: "Translation Based Arabic Text Categorization",
            url: process.env.PUBLIC_URL + "/pdfs/TranslationBasedArabicLanguageTC.pdf",
            author: "Madhu K. Shankarapani, Ram B. Basnet, Srinivas Mukkamala, Andrew H. Sung, and Bernardete M. Ribeiro",
            pub_info: "In Proc. of 2nd International Conference on Information Systems Technology and Management, 2008."
          },
          {
            title: "Detection of Phishing Attacks - A Machine Learning Approach",
            url: process.env.PUBLIC_URL + "/pdfs/DetectionOfPhishingAttacks.pdf",
            author: "Ram B. Basnet, Srinivas Mukkamala, and Andrew. H. Sung",
            pub_info: "Soft Computing Applications in Industry, Springer, pp. 373-383, 2008."
          },
          {
            title: "Detecting Coordinated Distributed Multiple Attacks",
            url: "pdfs/DetectingCDMAAttacks.pdf",
            author: "S. Mukkamala, K. Yendrapalli, R. B. Basnet, and A. H. Sung",
            pub_info: "In Proc. 21st International Conference on Advanced Information Networking and Applications (AINA 2007), Vol. 1, Niagara Falls, Canada, May 2007."
          },
          {
            title: "Detection of Virtual Environments and Low Interaction Honeypots",
            url: process.env.PUBLIC_URL + "/pdfs/DetectingHoneypots.pdf",
            author: "S. Mukkamala, K. Yendrapalli, R. B. Basnet, M. K. Shankarpani, and A. H. Sung",
            pub_info: "Information Assurance and Security Workshop, IEEE SMC, Vol. 1, pp. 92-98, West Point, NY, June 2007."
          }
        ]
    };
  }

  render() {
    return (
      <div class="col-sm-8">
        <h2>PUBLICATIONS</h2>
        <br />
        <table className="table table-striped">
          <tbody>
            {
              this.state.pub.map((pub) => (
                <tr>
                  <td>
                    <a href={pub.url} target="_blank" rel="noreferrer">{pub.title}</a><br />
                    {pub.author}<br />
                    <em>{pub.pub_info}</em>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Publication;