import React from 'react';

export default function MyCoursesPage() {
    const courses = [
        { title: 'Complete Fitness Masterclass', duration: '120', progress: 75, thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80', active: true },
        { title: 'Nutrition Fundamentals', duration: '90', progress: 40, thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80', active: true },
        { title: 'Yoga for Beginners', duration: '60', progress: 100, thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80', active: false }
    ];

    return (
        <div style={styles.pageContainer}>
            {/* Background Decorative Elements */}
            <div style={styles.blob1} />
            <div style={styles.blob2} />

            <main style={styles.mainContent}>

                {/* Bento Header */}
                <section style={styles.bentoGrid}>
                    {/* Main Hero Card */}
                    <div style={styles.heroCard}>
                        <div style={styles.heroOverlay}>
                            <span style={styles.kicker}>Welcome Back, Champ</span>
                            <h1 style={styles.heroTitle}>KEEP<br /><span style={styles.textGradient}>PUSHING.</span></h1>
                            <p style={styles.heroSubtext}>You've crushed 85% of your weekly goal. Keep the momentum high.</p>
                            <button style={styles.primaryBtn}>Resume Last Session</button>
                        </div>
                        <div style={styles.heroIconWrapper}>
                            <svg style={styles.heroIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>

                    {/* Stats Card */}
                    <div style={styles.statsCard}>
                        <div style={styles.cardHeader}>
                            <div style={styles.iconCircle}><ChartIcon /></div>
                            <span style={styles.label}>ACTIVITY</span>
                        </div>
                        <div style={styles.statsMain}>
                            <span style={styles.statsNumber}>05</span>
                            <span style={styles.statsUnit}>Programs</span>
                        </div>
                        <div style={styles.progressBarMini}>
                            <div style={{ ...styles.progressFillMini, width: '60%', backgroundColor: '#34d399' }} />
                        </div>
                        <div style={styles.statsFooter}>
                            <span style={styles.footerItem}><b>2</b> Done</span>
                            <span style={styles.footerItem}><b>3</b> Active</span>
                        </div>
                    </div>
                </section>

                {/* Course Section */}
                <section>
                    <div style={styles.sectionHeader}>
                        <h2 style={styles.sectionTitle}>Your Active Squad</h2>
                        <div style={styles.filterDots}>
                            <div style={styles.dotActive} />
                            <div style={styles.dot} />
                            <div style={styles.dot} />
                        </div>
                    </div>

                    <div style={styles.courseGrid}>
                        {courses.map((course, index) => (
                            <div key={index} style={styles.courseCard}>
                                <div style={styles.imageWrapper}>
                                    <img src={course.thumbnail} alt={course.title} style={styles.courseImage} />
                                    {course.progress === 100 && (
                                        <div style={styles.completeBadge}><CheckIcon /></div>
                                    )}
                                    <div style={styles.playButton}><PlayIcon /></div>
                                </div>

                                <div style={styles.cardBody}>
                                    <h3 style={styles.courseTitle}>{course.title}</h3>

                                    <div style={styles.cardMeta}>
                                        <div style={styles.metaItem}><ClockIcon /> {course.duration}m</div>
                                        <div style={{ ...styles.metaItem, color: course.progress === 100 ? '#10b981' : '#f97316' }}>
                                            {course.progress === 100 ? 'COMPLETED' : `${course.progress}% READY`}
                                        </div>
                                    </div>

                                    <div style={styles.progressContainer}>
                                        <div style={{ ...styles.progressFill, width: `${course.progress}%`, backgroundColor: course.progress === 100 ? '#10b981' : '#f97316' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

// --- Icons ---
const ChartIcon = () => <svg width="20" height="20" fill="none" stroke="#34d399" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const CheckIcon = () => <svg width="24" height="24" fill="white" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>;
const PlayIcon = () => <svg width="20" height="20" fill="white" viewBox="0 0 20 20"><path d="M4.5 3.5v13L16 10 4.5 3.5z" /></svg>;
const ClockIcon = () => <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

// --- Styles ---
const styles = {
    pageContainer: { minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', fontFamily: '"Inter", sans-serif', overflowX: 'hidden', position: 'relative' },
    blob1: { position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)', zIndex: 0 },
    blob2: { position: 'absolute', bottom: '10%', right: '-10%', width: '30%', height: '30%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)', zIndex: 0 },
    mainContent: { position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem' },

    bentoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' },
    heroCard: { gridColumn: 'span 2', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', borderRadius: '2.5rem', padding: '3.5rem', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.3)' },
    heroOverlay: { zIndex: 2, maxWidth: '60%' },
    kicker: { fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#d1fae5', display: 'block', marginBottom: '1rem' },
    heroTitle: { fontSize: '4rem', fontWeight: 900, lineHeight: 0.9, marginBottom: '1.5rem', letterSpacing: '-0.04em' },
    textGradient: { color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.6)' },
    heroSubtext: { color: '#d1fae5', marginBottom: '2rem', fontSize: '1rem', fontWeight: 500 },
    primaryBtn: { backgroundColor: 'white', color: '#059669', border: 'none', padding: '12px 28px', borderRadius: '14px', fontWeight: 800, cursor: 'pointer', fontSize: '0.9rem' },
    heroIconWrapper: { position: 'absolute', right: '-5%', bottom: '-5%', opacity: 0.1 },
    heroIcon: { width: '20rem', height: '20rem', transform: 'rotate(-15deg)' },

    statsCard: { backgroundColor: '#1e293b', borderRadius: '2.5rem', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    iconCircle: { width: '40px', height: '40px', backgroundColor: 'rgba(52, 211, 153, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    label: { fontSize: '0.7rem', fontWeight: 800, color: '#64748b', letterSpacing: '0.1em' },
    statsMain: { margin: '2rem 0' },
    statsNumber: { fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-0.05em' },
    statsUnit: { fontSize: '1rem', color: '#94a3b8', marginLeft: '0.5rem', fontWeight: 600 },
    progressBarMini: { height: '6px', backgroundColor: '#334155', borderRadius: '10px', overflow: 'hidden', marginBottom: '1.5rem' },
    statsFooter: { display: 'flex', gap: '2rem', borderTop: '1px solid #334155', paddingTop: '1.5rem' },
    footerItem: { fontSize: '0.8rem', color: '#94a3b8' },

    sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' },
    sectionTitle: { fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' },
    filterDots: { display: 'flex', gap: '8px' },
    dot: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#334155' },
    dotActive: { width: '24px', height: '8px', borderRadius: '10px', backgroundColor: '#3b82f6' },

    courseGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' },
    courseCard: { backgroundColor: 'rgba(30, 41, 59, 0.4)', borderRadius: '2.25rem', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease' },
    imageWrapper: { position: 'relative', height: '14rem', borderRadius: '1.75rem', overflow: 'hidden', marginBottom: '1.5rem' },
    courseImage: { width: '100%', height: '100%', objectFit: 'cover' },
    completeBadge: { position: 'absolute', inset: 0, backgroundColor: 'rgba(16, 185, 129, 0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' },
    playButton: { position: 'absolute', bottom: '1rem', right: '1rem', width: '45px', height: '45px', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.3)' },

    cardBody: { padding: '0 0.5rem' },
    courseTitle: { fontSize: '1.1rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1.25rem', height: '2.8rem', overflow: 'hidden' },
    cardMeta: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' },
    metaItem: { fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8' },
    progressContainer: { height: '6px', backgroundColor: '#1e293b', borderRadius: '10px', overflow: 'hidden' },
    progressFill: { height: '100%', borderRadius: '10px', transition: 'width 1s ease-in-out' }
};