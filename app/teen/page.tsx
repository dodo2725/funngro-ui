import styles from './page.module.css';

export default function Teen() {
  return (
    <main className={styles.main}>
      {/* Hero Section - White Background */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <p className={styles.tagline}>Trusted by 50+ lakh teens | Featured on Shark Tank India.</p>
              <h1 className={styles.headline}>
                Funngro Teenlancer
                <br />
                Earn REAL money by working with REAL companies!
              </h1>
              <p className={styles.subheadline}>
                As seen on Shark Tank India — a trusted platform for 50+ lakh youth to LEARN, EARN, and GROW.
              </p>
              <div className={styles.ctaButtons}>
                <button className={styles.buttonTeen}>Teen</button>
                <button className={styles.buttonCompany}>Company</button>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.logoContainer}>
                <div className={styles.logoGraphic}>
                  <div className={styles.paperPlane}>✈</div>
                  <div className={styles.barChart}>
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

      {/* Skills Section - Dark Background */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Earn REAL Money. Learn REAL Skills.</h2>
          <p className={styles.sectionSubtitle}>
            Work with real companies, build practical skills, and get paid — all while studying.
          </p>
          
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>📱</div>
              <h3>Social Media Marketing</h3>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>✍️</div>
              <h3>Content Writing</h3>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🎬</div>
              <h3>Video Editing</h3>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🎨</div>
              <h3>Graphic Design</h3>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>💻</div>
              <h3>Website Design</h3>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>📊</div>
              <h3>Data Entry</h3>
            </div>
          </div>

          {/* Download App Section */}
          <div className={styles.downloadApp}>
            <h3 className={styles.downloadTitle}>Download App</h3>
            <div className={styles.appButtons}>
              <button className={styles.appButton}>
                <span className={styles.appStoreIcon}>📱</span>
                <div>
                  <span className={styles.appLabel}>GET IT ON</span>
                  <span className={styles.appName}>Google play</span>
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

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Join Funngro?</h2>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💰</div>
              <h3>Earn Real Money</h3>
              <p>Get paid for your work with real companies. Build your savings while you study.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🎓</div>
              <h3>Learn Real Skills</h3>
              <p>Gain practical experience in social media, content writing, design, and more.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🚀</div>
              <h3>Build Your Portfolio</h3>
              <p>Work on real projects that you can showcase to future employers.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🤝</div>
              <h3>Work with Real Companies</h3>
              <p>Connect with trusted companies and build professional relationships.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>⏰</div>
              <h3>Flexible Schedule</h3>
              <p>Work around your school schedule. Balance studies and work effectively.</p>
            </div>
            
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🏆</div>
              <h3>Featured on Shark Tank</h3>
              <p>Join a platform trusted by investors and featured on Shark Tank India.</p>
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
