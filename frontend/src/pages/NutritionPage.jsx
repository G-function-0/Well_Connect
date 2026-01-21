import React from 'react';

export default function NutritionPage() {
    // Dummy data for the Bar Graph
    const weeklyData = [
        { day: 'Mon', val: 80, color: '#10b981' },
        { day: 'Tue', val: 65, color: '#10b981' },
        { day: 'Wed', val: 95, color: '#10b981' },
        { day: 'Thu', val: 40, color: '#3b82f6' }, // Highlight different status
        { day: 'Fri', val: 75, color: '#10b981' },
        { day: 'Sat', val: 85, color: '#10b981' },
        { day: 'Sun', val: 55, color: '#10b981' },
    ];

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f1f5f9',
            fontFamily: 'Inter, system-ui, sans-serif'
        }}>
            <main style={{
                flex: 1,
                maxWidth: '85rem',
                margin: '0 auto',
                width: '100%',
                padding: '3rem 1.5rem'
            }}>

                {/* HEADER SECTION */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: '3rem',
                }}>
                    <div>
                        <h1 style={{
                            fontSize: '3rem',
                            fontWeight: 900,
                            color: '#0f172a',
                            letterSpacing: '-0.05em',
                            lineHeight: 1,
                            margin: 0
                        }}>
                            Fit <span style={{ color: '#10b981' }}>Guide</span>
                        </h1>
                        <p style={{
                            color: '#64748b',
                            fontWeight: 500,
                            fontSize: '1.1rem',
                            marginTop: '0.5rem'
                        }}>
                            Precision nutrition for peak performance.
                        </p>
                    </div>
                    <button style={{
                        padding: '1rem 2rem',
                        backgroundColor: '#0f172a',
                        color: 'white',
                        borderRadius: '1rem',
                        border: 'none',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 10px 15px -3px rgba(15, 23, 42, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                    }}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Custom Target
                    </button>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '2rem'
                }}>

                    {/* LEFT COLUMN: STATS (8 Units) */}
                    <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        {/* BIG STATS ROW */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                            {[
                                { label: 'Calories', val: '1,450', unit: 'kcal', color: '#0f172a', pct: 72 },
                                { label: 'Protein', val: '85', unit: 'g', color: '#10b981', pct: 57 },
                                { label: 'Carbs', val: '120', unit: 'g', color: '#3b82f6', pct: 60 },
                                { label: 'Fats', val: '38', unit: 'g', color: '#f59e0b', pct: 76 },
                            ].map((stat, i) => (
                                <div key={i} style={{
                                    backgroundColor: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '1.5rem',
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
                                    border: '1px solid rgba(255,255,255,0.7)'
                                }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</span>
                                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#1e293b', margin: '0.5rem 0' }}>
                                        {stat.val}<span style={{ fontSize: '0.875rem', color: '#cbd5e1', marginLeft: '0.25rem' }}>{stat.unit}</span>
                                    </div>
                                    <div style={{ height: '6px', width: '100%', backgroundColor: '#f1f5f9', borderRadius: '10px', overflow: 'hidden' }}>
                                        <div style={{ height: '100%', width: `${stat.pct}%`, backgroundColor: stat.color, borderRadius: '10px' }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CHARTS ROW */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {/* CUSTOM BAR CHART CARD */}
                            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.02)' }}>
                                <h3 style={{ margin: '0 0 2rem 0', fontWeight: 800, fontSize: '1.1rem', color: '#1e293b' }}>Weekly Calorie Consistency</h3>
                                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '180px', paddingBottom: '20px' }}>
                                    {weeklyData.map((d, i) => (
                                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, gap: '10px' }}>
                                            <div style={{
                                                width: '30px',
                                                height: `${d.val}%`,
                                                backgroundColor: d.color,
                                                borderRadius: '6px 6px 2px 2px',
                                                transition: 'height 0.5s ease'
                                            }} />
                                            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8' }}>{d.day}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* PROGRESS CIRCLE CARD */}
                            <div style={{ backgroundColor: '#0f172a', padding: '2rem', borderRadius: '2rem', color: 'white' }}>
                                <h3 style={{ margin: '0 0 1rem 0', fontWeight: 800, fontSize: '1.1rem' }}>Daily Progress</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', height: '150px' }}>
                                    <div style={{ position: 'relative', width: '120px', height: '120px', borderRadius: '50%', border: '12px solid #1e293b', display: 'grid', placeItems: 'center' }}>
                                        <div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', border: '8px solid #10b981', borderTopColor: 'transparent', transform: 'rotate(45deg)' }} />
                                        <span style={{ fontWeight: 900, fontSize: '1.5rem' }}>72%</span>
                                    </div>
                                    <div>
                                        <p style={{ margin: 0, fontSize: '0.875rem', color: '#94a3b8' }}>Remaining</p>
                                        <p style={{ margin: '0.25rem 0', fontSize: '1.5rem', fontWeight: 800 }}>550 kcal</p>
                                        <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>↑ 12% from yesterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MEAL LIST */}
                        <div style={{ backgroundColor: 'white', borderRadius: '2rem', overflow: 'hidden' }}>
                            <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between' }}>
                                <h3 style={{ fontWeight: 800 }}>Recent Consumptions</h3>
                                <span style={{ color: '#3b82f6', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer' }}>View All</span>
                            </div>
                            {[
                                { name: 'Chicken Breast with Rice', type: 'LUNCH', cal: 450, time: '1:15 PM' },
                                { name: 'Greek Yogurt with Honey', type: 'SNACK', cal: 180, time: '4:30 PM' },
                            ].map((meal, i) => (
                                <div key={i} style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', borderBottom: '1px solid #f8fafc' }}>
                                    <div style={{ width: '48px', height: '48px', backgroundColor: '#f1f5f9', borderRadius: '12px', marginRight: '1.5rem', display: 'grid', placeItems: 'center' }}>🍱</div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ margin: 0, fontWeight: 700 }}>{meal.name}</h4>
                                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>{meal.type} • {meal.time}</span>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontWeight: 800 }}>{meal.cal} kcal</div>
                                        <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>Tracked</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: FORM (4 Units) */}
                    <div style={{ gridColumn: 'span 4' }}>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '2.5rem',
                            borderRadius: '2.5rem',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
                            position: 'sticky',
                            top: '2rem',
                            border: '1px solid #e2e8f0'
                        }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '2rem' }}>Quick Add</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Meal Name</label>
                                    <input type="text" placeholder="Search foods..." style={{ width: '100%', padding: '1rem', borderRadius: '1rem', border: '2px solid #f1f5f9', backgroundColor: '#f8fafc', fontWeight: 600, outline: 'none' }} />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Cals</label>
                                        <input type="number" style={{ width: '100%', padding: '1rem', borderRadius: '1rem', border: '2px solid #f1f5f9', backgroundColor: '#f8fafc', fontWeight: 600 }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Type</label>
                                        <select style={{ width: '100%', padding: '1rem', borderRadius: '1rem', border: '2px solid #f1f5f9', backgroundColor: '#f8fafc', fontWeight: 600 }}>
                                            <option>LUNCH</option>
                                            <option>DINNER</option>
                                        </select>
                                    </div>
                                </div>

                                <button style={{
                                    marginTop: '1rem',
                                    padding: '1.25rem',
                                    backgroundColor: '#10b981',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '1.25rem',
                                    fontWeight: 800,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 20px rgba(16, 185, 129, 0.2)'
                                }}>
                                    Log Meal Now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}