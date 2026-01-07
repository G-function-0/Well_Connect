import React from 'react';

// Reusable Button Component for Next-Level Branding
const ActionButton = ({ children, primary }) => (
    <button style={{
        ...styles.baseBtn,
        ...(primary ? styles.primaryBtn : styles.secondaryBtn)
    }}>
        {children}
    </button>
);

export default function LiveClassPage() {
    return (
        <div style={styles.pageWrapper}>
            <div style={styles.glowBg} />

            <main style={styles.container}>
                {/* Header: Dynamic & Informative */}
                <header style={styles.header}>
                    <div style={styles.headerInfo}>
                        <div style={styles.badgeRow}>
                            <div style={styles.liveIndicator}>
                                <span style={styles.pulseDot} />
                                LIVE NOW
                            </div>
                            <div style={styles.participantCount}>
                                <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
                                128 Watching
                            </div>
                        </div>
                        <h1 style={styles.mainTitle}>HIIT Cardio <span style={styles.mutedTitle}>Mastery</span></h1>
                    </div>

                    <div style={styles.timerCard}>
                        <div style={{ textAlign: 'right' }}>
                            <span style={styles.timerLabel}>ENDING IN</span>
                            <div style={styles.timerValue}>42:15</div>
                        </div>
                        <div style={styles.timerIcon}><ClockIcon /></div>
                    </div>
                </header>

                <div style={styles.layoutGrid}>
                    {/* Main Stage: Cinema Mode */}
                    <div style={styles.videoSection}>
                        <div style={styles.videoContainer}>
                            <div style={styles.videoOverlay}>
                                <div style={styles.overlayPlayCircle}>
                                    <div style={styles.playArrow} />
                                </div>
                                <h3 style={styles.overlayText}>Enter Workout Room</h3>
                                <p style={styles.overlaySubtext}>Sarah Johnson is live and waiting for you.</p>
                                <button style={styles.joinBtn}>Join Stream</button>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200"
                                style={styles.videoPlaceholder}
                                alt="Live Workout"
                            />
                        </div>

                        <div style={styles.detailsCard}>
                            <div style={styles.tabs}>
                                <span style={styles.activeTab}>Overview</span>
                                <span style={styles.inactiveTab}>Equipment</span>
                                <span style={styles.inactiveTab}>Resources</span>
                            </div>
                            <p style={styles.description}>
                                This high-intensity session targets major muscle groups through 45-second intervals.
                                Focus on <strong>explosive movement</strong> and consistent breathing.
                                No equipment needed, just space and hydration!
                            </p>
                        </div>
                    </div>

                    {/* Sidebar: Personal & Contextual */}
                    <aside style={styles.sidebar}>
                        {/* Instructor Card */}
                        <div style={styles.instructorCard}>
                            <img src="https://i.pravatar.cc/100?img=3" style={styles.avatar} alt="Sarah" />
                            <div style={{ flex: 1 }}>
                                <h4 style={styles.instructorName}>Sarah Johnson</h4>
                                <div style={styles.instructorSpecialty}>Elite Performance Coach</div>
                            </div>
                            <button style={styles.followBtn}>Follow</button>
                        </div>

                        {/* Preparation Checklist */}
                        <div style={styles.checklistCard}>
                            <h4 style={styles.cardTitle}>Quick Checklist</h4>
                            <ul style={styles.checklist}>
                                <li style={styles.checkItem}><CheckIcon /> Hydration (500ml Water)</li>
                                <li style={styles.checkItem}><CheckIcon /> Sufficient Floor Space</li>
                                <li style={styles.checkItem}><CheckIcon /> Heart Rate Monitor Sync</li>
                            </ul>
                        </div>

                        {/* Sticky Next Class Info */}
                        <div style={styles.promoCard}>
                            <div style={styles.promoContent}>
                                <span style={styles.promoLabel}>PART OF PROGRAM</span>
                                <h4 style={styles.promoTitle}>The 30-Day Shred Masterclass</h4>
                                <button style={styles.promoBtn}>View Full Curriculum</button>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}

// --- Icons ---
const ClockIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CheckIcon = () => <svg width="16" height="16" style={{ color: '#10b981' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;

// --- Styles ---
const styles = {
    pageWrapper: { minHeight: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'Inter, system-ui, sans-serif', position: 'relative', overflowX: 'hidden' },
    glowBg: { position: 'absolute', top: '-10%', right: '-5%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)', zIndex: 0 },
    container: { position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' },
    headerInfo: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
    badgeRow: { display: 'flex', gap: '1rem', alignItems: 'center' },
    liveIndicator: { display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ef4444', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.05em' },
    pulseDot: { width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 0 8px white' },
    participantCount: { color: '#94a3b8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' },
    mainTitle: { fontSize: '2.5rem', fontWeight: 900, margin: 0, letterSpacing: '-0.03em' },
    mutedTitle: { opacity: 0.3, fontWeight: 300 },
    timerCard: { display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1.25rem', borderRadius: '1.25rem', border: '1px solid rgba(255,255,255,0.1)' },
    timerLabel: { fontSize: '0.65rem', fontWeight: 700, color: '#64748b' },
    timerValue: { fontSize: '1.25rem', fontWeight: 800, fontFamily: 'monospace' },
    timerIcon: { color: '#34d399' },
    layoutGrid: { display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem' },
    videoSection: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    videoContainer: { position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#000', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' },
    videoPlaceholder: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 },
    videoOverlay: { position: 'absolute', inset: 0, zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)' },
    overlayPlayCircle: { width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' },
    playArrow: { width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid white', marginLeft: '6px' },
    overlayText: { fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.5rem 0' },
    overlaySubtext: { color: '#94a3b8', marginBottom: '1.5rem' },
    joinBtn: { background: '#2563eb', color: 'white', border: 'none', padding: '12px 32px', borderRadius: '12px', fontWeight: 700, cursor: 'pointer', transition: 'transform 0.2s' },
    detailsCard: { background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.05)' },
    tabs: { display: 'flex', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem', paddingBottom: '0.75rem' },
    activeTab: { fontWeight: 700, color: '#3b82f6', position: 'relative' },
    inactiveTab: { color: '#64748b', cursor: 'pointer' },
    description: { lineHeight: '1.7', color: '#cbd5e1' },
    sidebar: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    instructorCard: { display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.25rem', borderRadius: '1.5rem', color: '#0f172a' },
    avatar: { width: '50px', height: '50px', borderRadius: '12px', objectFit: 'cover' },
    instructorName: { margin: 0, fontSize: '1rem', fontWeight: 800 },
    instructorSpecialty: { fontSize: '0.75rem', color: '#10b981', fontWeight: 600 },
    followBtn: { background: '#f1f5f9', border: 'none', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' },
    checklistCard: { background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' },
    cardTitle: { margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' },
    checklist: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' },
    checkItem: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' },
    promoCard: { background: 'linear-gradient(135deg, #2563eb, #7c3aed)', borderRadius: '1.5rem', padding: '1.5rem', position: 'relative', overflow: 'hidden' },
    promoLabel: { fontSize: '0.6rem', fontWeight: 800, opacity: 0.8 },
    promoTitle: { margin: '0.5rem 0 1rem 0', fontSize: '1rem', fontWeight: 800, lineHeight: '1.4' },
    promoBtn: { width: '100%', background: 'rgba(255,255,255,0.2)', border: 'none', padding: '10px', borderRadius: '10px', color: 'white', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer' }
};