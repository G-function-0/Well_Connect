import React from 'react';
import { Link } from 'react-router';

// --- Reusable Modern Components ---

const StatCard = ({ label, value, icon, gradient }) => (
    <div style={{
        ...styles.card,
        background: 'white',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.7)',
    }}>
        {/* Subtle Decorative Gradient Orb */}
        <div style={{
            position: 'absolute', top: '-20px', right: '-20px',
            width: '100px', height: '100px',
            background: gradient, opacity: 0.1, borderRadius: '50%', filter: 'blur(20px)'
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
                <p style={styles.statLabel}>{label}</p>
                <p style={styles.statValue}>{value}</p>
            </div>
            <div style={{
                padding: '12px', borderRadius: '14px', background: `${gradient}15`, color: gradient.split(',')[1] || '#2563eb'
            }}>
                {icon}
            </div>
        </div>
        <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>↑ 12%</span>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>from last month</span>
        </div>
    </div>
);

export default function DashboardPage() {
    return (
        <div style={styles.pageContainer}>
            {/* Background Decor */}
            <div style={styles.bgGlow} />

            <div style={styles.contentWrapper}>
                <header style={styles.header}>
                    <div>
                        <h1 style={styles.greeting}>Welcome back, <span style={styles.gradientText}>Sarfaraz Shaikh!</span></h1>
                        <p style={styles.subtitle}>You've completed 80% of your weekly goal. Keep it up!</p>
                    </div>
                    <Link to="/courses" style={styles.primaryBtn}>+ Explore Courses</Link>
                </header>

                {/* Stats Grid */}
                <div style={styles.statsGrid}>
                    <StatCard label="Enrolled" value="05" gradient="linear-gradient(135deg, #60a5fa, #2563eb)" icon={<BookIcon />} />
                    <StatCard label="Progress" value="65%" gradient="linear-gradient(135deg, #34d399, #10b981)" icon={<ChartIcon />} />
                    <StatCard label="Completed" value="02" gradient="linear-gradient(135deg, #f472b6, #db2777)" icon={<CheckIcon />} />
                    <StatCard label="Sessions" value="03" gradient="linear-gradient(135deg, #fbbf24, #d97706)" icon={<CalendarIcon />} />
                </div>

                <div style={styles.mainGrid}>
                    {/* Active Courses Section */}
                    <section style={styles.card}>
                        <div style={styles.cardHeader}>
                            <h2 style={styles.sectionTitle}>Continue Learning</h2>
                            <button style={styles.textBtn}>View Schedule</button>
                        </div>

                        <div style={styles.courseList}>
                            {[
                                { title: 'Fitness Masterclass', p: 75, img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100' },
                                { title: 'Nutrition Fundamentals', p: 40, img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=100' }
                            ].map((course, i) => (
                                <div key={i} style={styles.courseItem}>
                                    <img src={course.img} style={styles.thumbnail} alt="" />
                                    <div style={{ flex: 1 }}>
                                        <h4 style={styles.courseName}>{course.title}</h4>
                                        <div style={styles.progressContainer}>
                                            <div style={{ ...styles.progressBar, width: `${course.p}%`, background: 'linear-gradient(90deg, #2563eb, #60a5fa)' }} />
                                        </div>
                                    </div>
                                    <button style={styles.playBtn}>▶</button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Activity/Live Classes */}
                    <section style={{ ...styles.card, background: 'linear-gradient(180deg, #1e293b, #0f172a)', color: 'white' }}>
                        <h2 style={{ ...styles.sectionTitle, color: 'white' }}>Upcoming Events</h2>
                        <div style={styles.eventList}>
                            {[
                                { title: 'HIIT Cardio', time: 'Today, 10:00 AM', active: true },
                                { title: 'Yoga Flow', time: 'Tomorrow, 06:00 PM', active: false }
                            ].map((ev, i) => (
                                <div key={i} style={{ ...styles.eventItem, background: ev.active ? 'rgba(255,255,255,0.1)' : 'transparent' }}>
                                    <div style={styles.eventDate}>
                                        <span style={{ fontWeight: 800 }}>{ev.time.split(',')[0]}</span>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ margin: 0, fontSize: '0.95rem' }}>{ev.title}</h4>
                                        <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{ev.time.split(',')[1]}</span>
                                    </div>
                                    {ev.active && <span style={styles.liveBadge}>LIVE</span>}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

// --- Icons ---
const BookIcon = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const ChartIcon = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const CheckIcon = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CalendarIcon = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;

// --- Styles ---
const styles = {
    pageContainer: {
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        fontFamily: '"Inter", sans-serif',
        position: 'relative',
        overflow: 'hidden'
    },
    bgGlow: {
        position: 'absolute',
        top: '-10%', left: '-10%',
        width: '40%', height: '40%',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)',
        zIndex: 0
    },
    contentWrapper: {
        maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem', position: 'relative', zIndex: 1
    },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' },
    greeting: { fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em', margin: 0 },
    gradientText: { background: 'linear-gradient(90deg, #2563eb, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
    subtitle: { color: '#64748b', marginTop: '0.5rem' },
    primaryBtn: {
        padding: '0.8rem 1.5rem', background: '#0f172a', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
    },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' },
    card: { padding: '1.5rem', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02), 0 20px 25px -5px rgba(0,0,0,0.05)' },
    statLabel: { fontSize: '0.875rem', fontWeight: 600, color: '#64748b', margin: '0 0 4px 0' },
    statValue: { fontSize: '2rem', fontWeight: 800, color: '#0f172a', margin: 0 },
    mainGrid: { display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '2rem' },
    cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' },
    sectionTitle: { fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 },
    textBtn: { background: 'none', border: 'none', color: '#2563eb', fontWeight: 700, cursor: 'pointer' },
    courseList: { display: 'flex', flexDirection: 'column', gap: '1rem' },
    courseItem: {
        display: 'flex', alignItems: 'center', gap: '1rem', padding: '12px', borderRadius: '16px', border: '1px solid #f1f5f9', transition: 'transform 0.2s'
    },
    thumbnail: { width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' },
    courseName: { fontSize: '0.95rem', fontWeight: 700, margin: '0 0 8px 0' },
    progressContainer: { width: '100%', height: '6px', background: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' },
    progressBar: { height: '100%', borderRadius: '10px' },
    playBtn: { width: '32px', height: '32px', borderRadius: '50%', border: 'none', background: '#f1f5f9', color: '#2563eb', cursor: 'pointer' },
    eventList: { display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' },
    eventItem: { display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '16px' },
    eventDate: { padding: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', minWidth: '50px', textAlign: 'center' },
    liveBadge: { padding: '4px 8px', background: '#ef4444', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 900 }
};