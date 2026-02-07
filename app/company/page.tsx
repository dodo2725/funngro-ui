import styles from './page.module.css';

export default function Company() {
  return (
    <main className={styles.main}>
      {/* Hero Section - Dark Background */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <h1 className={styles.headline}>
                Smart Talent for smart companies
              </h1>
              <p className={styles.subheadline}>
                Cost effective, Timely delivery, Innovative ideas while you help the next generation
              </p>
              <p className={styles.tagline}>
                Talented Teenagers for your company
              </p>
              <button className={styles.ctaButton}>Hire Teenlancer</button>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.logoContainer}>
                <div className={styles.logoGraphic}>
                  <div className={styles.paperPlane}>✈</div>
                  <div className={styles.barChart}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                  </div>
                  <div className={styles.arrow}>↗</div>
                </div>
                <span className={styles.brandName}>Funngro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Funngro Section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.aboutTitle}>About Funngro</h2>
          
          <div className={styles.phonesContainer}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <div className={styles.appScreen}>
                  <div className={styles.appCircle}>
                    <div className={styles.appIcon}>📱</div>
                  </div>
                  <div className={styles.appCircle}>
                    <div className={styles.appIcon}>💰</div>
                  </div>
                  <div className={styles.appText}>Earn Money</div>
                  <div className={styles.appText}>Real company projects</div>
                  <div className={styles.appText}>Earn & get</div>
                  <button className={styles.appNextButton}>Next</button>
                </div>
              </div>
            </div>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <p className={styles.sharkTankText}>SHARK TANK</p>
                <p className={styles.sharkTankTextGold}>INDIA</p>
                <p className={styles.sharkTankSubtext}>We Featured In Shark Tank.</p>
              </div>
            </div>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <div className={styles.appScreen}>
                  <div className={styles.appCircle}>
                    <div className={styles.appIcon}>🔍</div>
                  </div>
                  <div className={styles.appText}>Money</div>
                  <div className={styles.appText}>Card & be the</div>
                  <div className={styles.appText}>your group</div>
                  <button className={styles.appNextButton}>Next</button>
                </div>
              </div>
            </div>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <div className={styles.appScreenGreen}>
                  <div className={styles.appHeader}>Funn</div>
                  <div className={styles.appText}>Get you income,</div>
                  <div className={styles.appText}>with rea compar</div>
                  <div className={styles.appText}>125 comp</div>
                </div>
              </div>
            </div>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <div className={styles.appScreenDark}>
                  <div className={styles.appHeader}>Fino</div>
                  <div className={styles.appDate}>01/09</div>
                  <div className={styles.appText}>money in</div>
                  <div className={styles.appGift}>🎁</div>
                  <div className={styles.appText}>st anr</div>
                  <div className={styles.appText}>nds to</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.aboutContent}>
            <p className={styles.description}>
              Funngro is a platform that connects talented teenagers with real companies, 
              enabling them to earn money while learning practical, real-world skills. 
              Our mission is to help young individuals gain early exposure to professional work, 
              build confidence, and become future-ready — while helping businesses get high-quality work done efficiently.
            </p>

            <div className={styles.whySection}>
              <h3 className={styles.subsectionTitle}>Why Funngro?</h3>
              <p className={styles.description}>
                Traditional education often focuses on theory, but real growth happens through experience. 
                Funngro bridges this gap by giving teenagers access to real projects from real companies.
              </p>
              <ul className={styles.beliefsList}>
                <li>Learning should be practical</li>
                <li>Teens should be empowered early</li>
                <li>Skills matter more than age</li>
              </ul>
            </div>

            <div className={styles.visionSection}>
              <h3 className={styles.subsectionTitle}>Our Vision</h3>
              <div className={styles.visionContent}>
                <span className={styles.visionIcon}>😊</span>
                <p className={styles.description}>
                  To create a future where every teenager has access to meaningful work opportunities 
                  and skill-based learning.
                </p>
              </div>
            </div>

            <div className={styles.joinSection}>
              <h3 className={styles.subsectionTitle}>Join the Funngro Movement</h3>
              <p className={styles.description}>
                Whether you are a teenager looking to earn while learning or a company seeking fresh talent, 
                Funngro is the platform where opportunities meet ambition.
              </p>
            </div>
          </div>

          {/* Partners Section */}
          <div className={styles.partners}>
            <h2 className={styles.sectionTitle}>
              We are trusted by Hundreds of companies and partners working with Funngro to find smart talent.
            </h2>
            
            <div className={styles.partnersGrid}>
              <div className={styles.partnerCategory}>
                <h3 className={styles.partnerCategoryTitle}>Companies</h3>
                <div className={styles.partnerLogos}>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>🚗</div>
                    <div>
                      <div className={styles.logoName}>CarDekho</div>
                      <div className={styles.logoTagline}>BHAROSA KAR KE DEKHO</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>☀️</div>
                    <div>
                      <div className={styles.logoName}>ENERZY</div>
                      <div className={styles.logoTagline}>SOLAR</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>📈</div>
                    <div>
                      <div className={styles.logoName}>tarrakki</div>
                      <div className={styles.logoTagline}>Towards Prosperity</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>📊</div>
                    <div>
                      <div className={styles.logoName}>StockPe</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>🏢</div>
                    <div>
                      <div className={styles.logoName}>Legacynext</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>⚡</div>
                    <div>
                      <div className={styles.logoName}>Two99</div>
                      <div className={styles.logoTagline}>Commerce at the speed of light</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>🌱</div>
                    <div>
                      <div className={styles.logoName}>ECO365®</div>
                      <div className={styles.logoTagline}>Sustainable Living</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>📈</div>
                    <div>
                      <div className={styles.logoName}>GROW PARTNER</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>💼</div>
                    <div>
                      <div className={styles.logoName}>MONECH</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.partnerCategory}>
                <h3 className={styles.partnerCategoryTitle}>Partners</h3>
                <div className={styles.partnerLogos}>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>🎬</div>
                    <div>
                      <div className={styles.logoName}>MESC</div>
                      <div className={styles.logoTagline}>MEDIA & ENTERTAINMENT SKILLS COUNCIL</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>🚀</div>
                    <div>
                      <div className={styles.logoName}>AIC-PINNACLE</div>
                      <div className={styles.logoTagline}>ENTREPRENEURSHIP FORUM</div>
                      <div className={styles.logoSubtagline}>INNOVATION | INCUBATION | INVESTMENT</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>💎</div>
                    <div>
                      <div className={styles.logoName}>QAPITA</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>⚡</div>
                    <div>
                      <div className={styles.logoName}>HEADSTART®</div>
                    </div>
                  </div>
                  <div className={styles.partnerLogo}>
                    <div className={styles.logoIcon}>🎓</div>
                    <div>
                      <div className={styles.logoName}>ATAL INCUBATION CENTRE</div>
                      <div className={styles.logoTagline}>Sri Krishnadevaraya University</div>
                      <div className={styles.logoSubtagline}>Startup Scaleup</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download App Section */}
          <div className={styles.downloadApp}>
            <h3 className={styles.downloadTitle}>Download App</h3>
            <div className={styles.appButtons}>
              <button className={styles.appButton}>
                <span className={styles.appStoreIcon}>📱</span>
                <div>
                  <span className={styles.appLabel}>Download on the</span>
                  <span className={styles.appName}>Google Play</span>
                </div>
              </button>
              <button className={styles.appButton}>
                <span className={styles.appStoreIcon}>🍎</span>
                <div>
                  <span className={styles.appLabel}>Download on the</span>
                  <span className={styles.appName}>App Store</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div className={styles.footerLogo}>
              <span className={styles.footerLogoIcon}>✈</span>
              <span className={styles.footerLogoText}>Funngro</span>
            </div>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Features</a>
              <a href="#" className={styles.footerLink}>Learn more</a>
              <a href="#" className={styles.footerLink}>Support</a>
            </div>
            <div className={styles.socialIcons}>
              <span className={styles.socialIcon}>📷</span>
              <span className={styles.socialIcon}>💼</span>
              <span className={styles.socialIcon}>✖</span>
            </div>
          </div>
          <div className={styles.disclaimer}>
            <span className={styles.warningIcon}>⚠️</span>
            <p>
              Disclaimer: This website is a conceptual and non-commercial project created for design, 
              learning, and demonstration purposes only. It is not an official or functional platform, 
              and no real services, transactions, or partnerships are offered through this site. 
              Any resemblance to real companies, platforms, or services is purely for educational and illustrative purposes.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
