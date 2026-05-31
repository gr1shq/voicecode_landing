'use client'
import React, { useState } from 'react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      await fetch('YOUR_FORM_ENDPOINT_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, signedUpAt: new Date().toISOString() })
      });
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#0A0A0A',
      color: '#EDEDED',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    hero: {
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1.5rem',
      position: 'relative',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '800px',
      height: '800px',
      background: 'radial-gradient(circle, rgba(255,209,102,0.08) 0%, rgba(10,10,10,0) 70%)',
      borderRadius: '50%',
      pointerEvents: 'none'
    },
    heroContent: {
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
    },
    title: {
      fontSize: '5rem',
      fontWeight: '800',
      lineHeight: '1.1',
      marginBottom: '1.5rem',
      letterSpacing: '-0.03em'
    },
    yellowText: {
      color: '#FFD166',
      borderBottom: '2px solid #FFD166',
      display: 'inline-block'
    },
    description: {
      fontSize: '1.35rem',
      color: '#A0A0A0',
      maxWidth: '650px',
      margin: '0 auto 2.5rem',
      lineHeight: '1.5'
    },
    formContainer: {
      maxWidth: '500px',
      margin: '0 auto'
    },
    form: {
      display: 'flex',
      gap: '0.75rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    input: {
      flex: '1',
      minWidth: '260px',
      padding: '1rem 1.25rem',
      fontSize: '1rem',
      backgroundColor: '#1A1A1A',
      border: '1px solid #2A2A2A',
      borderRadius: '100px',
      color: '#EDEDED',
      outline: 'none'
    },
    button: {
      padding: '1rem 2rem',
      fontSize: '1rem',
      fontWeight: '600',
      backgroundColor: '#FFD166',
      color: '#0A0A0A',
      border: 'none',
      borderRadius: '100px',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    successMessage: {
      marginTop: '1rem',
      color: '#FFD166',
      fontSize: '0.875rem'
    },
    errorMessage: {
      marginTop: '1rem',
      color: '#E5484D',
      fontSize: '0.875rem'
    },
    fineprint: {
      marginTop: '1.5rem',
      fontSize: '0.8rem',
      color: '#666666'
    },
    featureSection: {
      padding: '6rem 1.5rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    featureAlternating: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5rem'
    },
    featureRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center'
    },
    featureContent: {
      paddingRight: '2rem'
    },
    featureBadge: {
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      letterSpacing: '1.5px',
      color: '#FFD166',
      marginBottom: '1rem'
    },
    featureTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1rem',
      lineHeight: '1.3'
    },
    featureText: {
      color: '#A0A0A0',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    featureList: {
      listStyle: 'none',
      padding: 0
    },
    featureListItem: {
      padding: '0.5rem 0',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    checkmark: {
      color: '#FFD166',
      fontSize: '1.25rem'
    },
    visualBox: {
      backgroundColor: '#111111',
      borderRadius: '24px',
      padding: '2rem',
      border: '1px solid #2A2A2A',
      minHeight: '320px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    visualGlow: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      backgroundColor: '#FFD166',
      opacity: 0.05,
      borderRadius: '50%',
      filter: 'blur(40px)'
    },
    visualContent: {
      position: 'relative',
      zIndex: 2,
      width: '100%'
    },
    // Voice visual styles
    voiceWaveform: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px',
      height: '120px'
    },
    voiceBar: {
      width: '4px',
      backgroundColor: '#FFD166',
      borderRadius: '2px',
      animation: 'voiceWave 1.2s ease-in-out infinite'
    },
    // Deploy visual styles
    deployVisual: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    },
    deployUrl: {
      fontSize: '0.9rem',
      color: '#A0A0A0',
      fontFamily: 'monospace',
      backgroundColor: '#1A1A1A',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      border: '1px solid #2A2A2A'
    },
    deployStatus: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      color: '#FFD166'
    },
    deployDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#FFD166',
      borderRadius: '50%',
      animation: 'pulse 1.5s infinite'
    },
    // Process visual styles
    processSteps: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      width: '100%'
    },
    processStep: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1rem',
      backgroundColor: '#1A1A1A',
      borderRadius: '12px',
      border: '1px solid #2A2A2A',
      fontSize: '0.85rem',
      color: '#A0A0A0'
    },
    processStepActive: {
      borderColor: '#FFD16640',
      color: '#EDEDED'
    },
    processStepDone: {
      color: '#FFD166'
    },
    processIcon: {
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.75rem'
    },
    ctaSection: {
      padding: '5rem 1.5rem',
      textAlign: 'center',
      background: 'linear-gradient(180deg, #0A0A0A 0%, #FFD16602 100%)'
    },
    ctaBox: {
      maxWidth: '700px',
      margin: '0 auto',
      padding: '3rem',
      backgroundColor: '#111111',
      borderRadius: '32px',
      border: '1px solid #FFD16620'
    },
    ctaTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1rem'
    },
    ctaText: {
      color: '#A0A0A0',
      marginBottom: '2rem',
      fontSize: '1.1rem'
    },
    footer: {
      padding: '3rem 1.5rem',
      textAlign: 'center',
      borderTop: '1px solid #1F1F1F',
      color: '#666666',
      fontSize: '0.8rem'
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginBottom: '1.5rem'
    },
    footerLink: {
      color: '#666666',
      textDecoration: 'none'
    }
  };

  // Add animations to document head
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }
      @keyframes voiceWave {
        0%, 100% { height: 20px; opacity: 0.4; }
        50% { height: 60px; opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            Your AI Agent That<br />
            <span style={styles.yellowText}>Listens, Then Builds</span>
          </h1>

          <p style={styles.description}>
            Describe your business out loud. The agent asks smart follow-ups,<br />
            then deploys a production-ready website. No technical skills required.
          </p>

          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={styles.input}
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                style={styles.button}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#E6C14A';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#FFD166';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {status === 'loading' ? 'SIGNING UP...' : 'GET EARLY ACCESS'}
              </button>
            </form>

            {status === 'success' && (
              <div style={styles.successMessage}>
                ✓ You're on the list. Early access + lifetime discount locked.
              </div>
            )}
            {status === 'error' && (
              <div style={styles.errorMessage}>
                Something went wrong. Just DM me on LinkedIn.
              </div>
            )}

            <div style={styles.fineprint}>
              Early testers get <strong style={{color: '#FFD166'}}>40% off forever</strong>. No spam. 2 emails max before launch.
            </div>
          </div>
        </div>
      </div>

      <div style={styles.featureSection}>
        <div style={styles.featureAlternating}>
          <div style={styles.featureRow}>
            <div style={styles.featureContent}>
              <div style={styles.featureBadge}>VOICE FIRST</div>
              <div style={styles.featureTitle}>Just talk. It listens.</div>
              <div style={styles.featureText}>No forms. No questionnaires. No technical jargon. Explain your business like you would to a teammate. The agent captures everything and asks smart follow-ups until it gets it right.</div>
              <ul style={styles.featureList}>
                <li style={styles.featureListItem}><span style={styles.checkmark}>✓</span> Natural conversation flow</li>
                <li style={styles.featureListItem}><span style={styles.checkmark}>✓</span> Clarifies brand voice and tone</li>
                <li style={styles.featureListItem}><span style={styles.checkmark}>✓</span> Understands page structure and goals</li>
              </ul>
            </div>
            <div style={styles.visualBox}>
              <div style={styles.visualGlow}></div>
              <div style={styles.visualContent}>
                <div style={styles.voiceWaveform}>
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        ...styles.voiceBar,
                        height: `${20 + Math.random() * 40}px`,
                        animationDelay: `${i * 0.1}s`,
                        opacity: 0.3 + (i / 12) * 0.7
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{...styles.featureRow, direction: 'rtl'}}>
            <div style={{...styles.featureContent, direction: 'ltr'}}>
              <div style={styles.featureBadge}>ZERO CODE</div>
              <div style={styles.featureTitle}>Production-ready. Instantly.</div>
              <div style={styles.featureText}>The agent doesn't just generate HTML. It builds a fully functional, responsive website with your branding, pages, and content. Deployed and live in minutes.</div>
              <ul style={styles.featureList}>
                <li style={styles.featureListItem}><span style={styles.checkmark}>✓</span> No hosting setup required</li>
                <li style={styles.featureListItem}><span style={styles.checkmark}>✓</span> You own the code completely</li>
                <li style={styles.featureListItem}><span style={styles.checkmark}>✓</span> Export or modify anytime</li>
              </ul>
            </div>
            <div style={styles.visualBox}>
              <div style={styles.visualGlow}></div>
              <div style={styles.visualContent}>
                <div style={styles.deployVisual}>
                  <div style={styles.deployUrl}>yourbusiness.agent.app</div>
                  <div style={styles.deployStatus}>
                    <span style={styles.deployDot}></span>
                    <span>Live in 47 seconds</span>
                  </div>
                  <div style={{fontSize: '0.75rem', color: '#666666', marginTop: '0.5rem'}}>
                    SSL certificate • CDN enabled • Mobile responsive
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.featureRow}>
            <div style={styles.featureContent}>
              <div style={styles.featureBadge}>TRANSPARENT</div>
              <div style={styles.featureTitle}>Every step explained.</div>
              <div style={styles.featureText}>Most AI tools are black boxes. This one explains everything in plain English — what it's doing, why, and what comes next. You stay in control.</div>
              <ul style={styles.featureList}>
                <li style={styles.featureListItem}><span style={styles.checkmark}>✓</span> No hidden prompts or magic</li>
                <li style={styles.featureListItem}><span style={styles.checkmark}>✓</span> Full visibility into the process</li>
                <li style={styles.featureListItem}><span style={styles.checkmark}>✓</span> You approve before deployment</li>
              </ul>
            </div>
            <div style={styles.visualBox}>
              <div style={styles.visualGlow}></div>
              <div style={styles.visualContent}>
                <div style={styles.processSteps}>
                  <div style={{...styles.processStep, ...styles.processStepDone}}>
                    <span style={styles.processIcon}>✓</span>
                    <span>Analyzing business requirements</span>
                  </div>
                  <div style={{...styles.processStep, ...styles.processStepDone}}>
                    <span style={styles.processIcon}>✓</span>
                    <span>Generating homepage layout</span>
                  </div>
                  <div style={{...styles.processStep, ...styles.processStepActive}}>
                    <span style={styles.processIcon}>◐</span>
                    <span>Adding contact form & pages</span>
                  </div>
                  <div style={styles.processStep}>
                    <span style={styles.processIcon}>○</span>
                    <span>Deploying to production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.ctaSection}>
        <div style={styles.ctaBox}>
          <div style={styles.ctaTitle}>Join the waitlist</div>
          <div style={styles.ctaText}>First 100 get lifetime 40% off. I'll send 2 updates before launch — no spam, just progress.</div>
          <button
            onClick={() => document.querySelector('input')?.focus()}
            style={{...styles.button, backgroundColor: '#FFD166', color: '#0A0A0A', fontSize: '1.1rem', padding: '1rem 2.5rem'}}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#E6C14A';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FFD166';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            ADD ME TO THE WAITLIST
          </button>
        </div>
      </div>

      <div style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="https://x.com/Tapecodes" target="_blank" style={styles.footerLink}>Twitter / X</a>
          <a href="https://www.linkedin.com/in/grisha-p-182a443ba/" target="_blank" style={styles.footerLink}>LinkedIn</a>
          <a href="https://github.com/gr1shq/" target="_blank" style={styles.footerLink}>GitHub</a>
        </div>
        <div>© 2026 VoiceCode. All rights reserved.</div>
      </div>
    </div>
  );
};

export default LandingPage;