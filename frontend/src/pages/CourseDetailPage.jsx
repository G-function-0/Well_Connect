import React from 'react';

// --- Sub-components for Next-Level UI ---

const Badge = ({ children, color = '#10b981' }) => (
    <span style={{
        padding: '0.4rem 0.8rem',
        backgroundColor: `${color}15`,
        color: color,
        borderRadius: '2rem',
        fontSize: '0.75rem',
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        border: `1px solid ${color}30`
    }}>
        {children}
    </span>
);

const ModuleCard = ({ number, title, duration, isPreview }) => (
    <div style={styles.moduleCard}>
        <div style={styles.moduleLeft}>
            <div style={styles.moduleNumber}>{number}</div>
            <div style={styles.moduleInfo}>
                <h3 style={styles.moduleTitle}>{title}</h3>
                <span style={styles.moduleDuration}>
                    <svg style={{ width: '12px', height: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {duration} minutes
                </span>
            </div>
        </div>
        {isPreview ? (
            <button style={styles.previewBtn}>Free Preview</button>
        ) : (
            <svg style={{ width: '20px', height: '20px', color: '#cbd5e1' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
        )}
    </div>
);

export default function CourseDetailPage() {
    return (
        <div style={styles.pageWrapper}>
            {/* 1. Cinematic Header Section */}
            <header style={styles.heroSection}>
                <div style={styles.heroOverlay} />
                <div style={styles.heroContent}>
                    <div style={styles.breadcrumb}>Courses / Fitness / Masterclass</div>
                    <h1 style={styles.mainTitle}>Complete Fitness <br /><span style={styles.gradientText}>Masterclass 2026</span></h1>

                    <div style={styles.metaRow}>
                        <div style={styles.ratingBox}>
                            <div style={styles.stars}>★★★★★</div>
                            <span style={{ fontWeight: 700 }}>4.9</span>
                            <span style={{ opacity: 0.7 }}>(1.2k+ ratings)</span>
                        </div>
                        <div style={styles.dotSeparator} />
                        <span>12,402 students enrolled</span>
                        <div style={styles.dotSeparator} />
                        <Badge color="#34d399">Bestseller</Badge>
                    </div>

                    <div style={styles.instructorBrief}>
                        <img src="https://i.pravatar.cc/100?img=5" style={styles.instructorAvatar} alt="John Fitness" />
                        <div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Created by</div>
                            <div style={{ fontWeight: 700 }}>Coach John Fitness</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. Main Body Layout */}
            <main style={styles.contentLayout}>
                <div style={styles.mainColumn}>

                    {/* Video Preview Card */}
                    <section style={styles.sectionCard}>
                        <div style={styles.videoPlaceholder}>
                            <div style={styles.playPulse}>
                                <svg style={styles.playIcon} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4.516 7.548c0-.469.468-.813.906-.813.187 0 .344.063.531.156l6.094 3.375c.375.188.563.531.563.906 0 .344-.188.688-.563.906l-6.094 3.375c-.187.094-.344.156-.531.156-.438 0-.906-.344-.906-.813V7.548z" />
                                </svg>
                            </div>
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" style={styles.videoThumb} alt="Preview" />
                        </div>
                        <h2 style={styles.sectionTitle}>What you'll learn</h2>
                        <div style={styles.learningGrid}>
                            {['Advanced strength protocols', 'Bio-mechanics & Form', 'Metabolic conditioning', 'Elite nutrition planning'].map(item => (
                                <div key={item} style={styles.checkItem}>
                                    <svg style={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Curriculum Section */}
                    <section style={styles.sectionCard}>
                        <div style={styles.sectionHeader}>
                            <h2 style={styles.sectionTitle}>Course Content</h2>
                            <span style={styles.statsSmall}>12 Sections • 48 Lectures • 12h total</span>
                        </div>
                        <div style={styles.curriculumList}>
                            <ModuleCard number="01" title="Introduction to Bio-Hacking Fitness" duration="15" isPreview={true} />
                            <ModuleCard number="02" title="The Science of Hypertrophy" duration="45" isPreview={false} />
                            <ModuleCard number="03" title="Foundation: Squat & Deadlift Mechanics" duration="60" isPreview={false} />
                            <ModuleCard number="04" title="Advanced Nutrition & Supplementation" duration="30" isPreview={false} />
                        </div>
                    </section>
                </div>

                {/* 3. Sticky Pricing Sidebar */}
                <aside style={styles.sidebar}>
                    <div style={styles.stickyCard}>
                        <div style={styles.priceRow}>
                            <span style={styles.currentPrice}>$49.99</span>
                            <span style={styles.oldPrice}>$199.99</span>
                            <Badge color="#ef4444">75% OFF</Badge>
                        </div>
                        <p style={styles.timerText}>🔥 Offer ends in <b>12 hours</b></p>

                        <button style={styles.enrollBtn}>Enroll Now</button>
                        <button style={styles.wishlistBtn}>Add to Wishlist</button>

                        <div style={styles.inclusionList}>
                            <div style={styles.inclusionItem}>✓ Full lifetime access</div>
                            <div style={styles.inclusionItem}>✓ Certificate of completion</div>
                            <div style={styles.inclusionItem}>✓ 12 downloadable resources</div>
                        </div>

                        <div style={styles.shareBox}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Share this course</span>
                            <div style={styles.socialIcons}>...</div>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}

const styles = {
    pageWrapper: {
        backgroundColor: '#f1f5f9',
        minHeight: '100vh',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        color: '#1e293b'
    },
    heroSection: {
        height: '450px',
        position: 'relative',
        backgroundColor: '#0f172a',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%',
        overflow: 'hidden'
    },
    heroOverlay: {
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)',
        zIndex: 1
    },
    heroContent: {
        position: 'relative',
        zIndex: 2,
        maxWidth: '800px',
        color: 'white'
    },
    breadcrumb: { color: '#10b981', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase' },
    mainTitle: { fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, margin: '0 0 1.5rem 0', letterSpacing: '-0.03em' },
    gradientText: { background: 'linear-gradient(90deg, #34d399, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    metaRow: { display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: '0.95rem' },
    ratingBox: { display: 'flex', gap: '0.5rem', color: '#fbbf24' },
    dotSeparator: { width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.3)' },
    instructorBrief: { display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2.5rem' },
    instructorAvatar: { width: '48px', height: '48px', borderRadius: '1rem', border: '2px solid #10b981' },

    contentLayout: { maxWidth: '1280px', margin: '-60px auto 0', display: 'flex', gap: '2.5rem', padding: '0 20px 100px', position: 'relative', zIndex: 10 },
    mainColumn: { flex: 2 },
    sectionCard: { backgroundColor: 'white', borderRadius: '2rem', padding: '2.5rem', marginBottom: '2rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)' },

    videoPlaceholder: { width: '100%', height: '400px', backgroundColor: '#000', borderRadius: '1.5rem', overflow: 'hidden', position: 'relative', marginBottom: '2rem' },
    videoThumb: { width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 },
    playPulse: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', backgroundColor: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 0 0 15px rgba(16, 185, 129, 0.2)', cursor: 'pointer' },
    playIcon: { width: '40px' },

    sectionTitle: { fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' },
    learningGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
    checkItem: { display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: '#475569' },
    checkIcon: { width: '18px', color: '#10b981' },

    curriculumList: { display: 'flex', flexDirection: 'column', gap: '0.8rem' },
    moduleCard: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem', borderRadius: '1.2rem', border: '1px solid #f1f5f9', transition: 'all 0.2s' },
    moduleLeft: { display: 'flex', alignItems: 'center', gap: '1.2rem' },
    moduleNumber: { fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8' },
    moduleTitle: { fontSize: '1rem', fontWeight: 700, margin: 0 },
    moduleDuration: { fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' },
    previewBtn: { backgroundColor: '#f1f5f9', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.6rem', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer', color: '#1e293b' },

    sidebar: { flex: 1 },
    stickyCard: { position: 'sticky', top: '2rem', backgroundColor: 'white', borderRadius: '2.5rem', padding: '2.5rem', boxShadow: '0 40px 60px -15px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.8)' },
    priceRow: { display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' },
    currentPrice: { fontSize: '2.5rem', fontWeight: 800 },
    oldPrice: { textDecoration: 'line-through', color: '#94a3b8', fontSize: '1.1rem' },
    timerText: { color: '#ef4444', fontSize: '0.85rem', marginBottom: '2rem' },
    enrollBtn: { width: '100%', padding: '1.2rem', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '1.2rem', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 15px 30px rgba(16, 185, 129, 0.3)', marginBottom: '1rem' },
    wishlistBtn: { width: '100%', padding: '1.2rem', backgroundColor: 'transparent', color: '#1e293b', border: '2px solid #e2e8f0', borderRadius: '1.2rem', fontWeight: 800, cursor: 'pointer' },
    inclusionList: { marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', borderTop: '1px solid #f1f5f9', paddingTop: '2rem' },
    inclusionItem: { fontSize: '0.85rem', color: '#475569', fontWeight: 500 }
};