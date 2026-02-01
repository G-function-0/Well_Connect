import { Link } from "react-router";

export default function CoursePlayerPage() {

    const meetUrl = "https://meet.google.com/aiu-tihx-iow";
    const handleJoinLive = () => {
        window.open(meetUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f9fafb'
        }}>
            <div style={{
                flex: 1,
                display: 'flex'
            }}>
                {/* Sidebar */}
                <div style={{
                    width: '20rem',
                    backgroundColor: '#ffffff',
                    borderRight: '1px solid #e5e7eb',
                    overflowY: 'auto'
                }}>
                    <div style={{
                        padding: '1rem',
                        borderBottom: '1px solid #e5e7eb'
                    }}>
                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem',
                            backgroundColor: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#4b5563',
                            marginBottom: '1rem',
                            fontSize: '0.875rem'
                        }}>
                            <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            <Link to="/my-courses" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Back to Courses
                            </Link>

                        </button>
                        <h2 style={{
                            fontWeight: 700,
                            fontSize: '1.125rem'
                        }}>
                            Complete Fitness Masterclass
                        </h2>
                        <div style={{ marginTop: '0.5rem' }}>
                            <div style={{
                                width: '100%',
                                backgroundColor: '#e5e7eb',
                                borderRadius: '9999px',
                                height: '0.5rem'
                            }}>
                                <div style={{
                                    backgroundColor: '#2563eb',
                                    height: '0.5rem',
                                    borderRadius: '9999px',
                                    width: '40%'
                                }} />
                            </div>
                            <p style={{
                                fontSize: '0.875rem',
                                color: '#4b5563',
                                marginTop: '0.25rem'
                            }}>
                                40% Complete
                            </p>
                        </div>
                    </div>
                    <div style={{ padding: '1rem' }}>
                        <h3 style={{
                            fontWeight: 600,
                            marginBottom: '1rem'
                        }}>
                            Course Content
                        </h3>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                        }}>
                            {[
                                { title: 'Introduction to Fitness Training', duration: '15', completed: true, active: true },
                                { title: 'Strength Training Fundamentals', duration: '30', completed: true, active: false },
                                { title: 'Cardiovascular Training', duration: '25', completed: false, active: false },
                                { title: 'Nutrition Basics', duration: '20', completed: false, active: false },
                                { title: 'Recovery and Rest', duration: '30', completed: false, active: false }
                            ].map((module, index) => (
                                <button
                                    key={index}
                                    style={{
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        backgroundColor: module.active ? '#dbeafe' : 'transparent',
                                        color: module.active ? '#1e40af' : '#000000',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.2s'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            {module.completed ? (
                                                <svg style={{ width: '1.25rem', height: '1.25rem', color: '#16a34a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            ) : (
                                                <div style={{
                                                    width: '1.25rem',
                                                    height: '1.25rem',
                                                    border: '2px solid #d1d5db',
                                                    borderRadius: '50%'
                                                }} />
                                            )}
                                            <span style={{ fontWeight: 500 }}>{module.title}</span>
                                        </div>
                                        <span style={{
                                            fontSize: '0.875rem',
                                            color: '#6b7280'
                                        }}>
                                            {module.duration} min
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {/* Video Player */}
                    <div style={{
                        flex: 1,
                        backgroundColor: '#111827'
                    }}>
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '72rem',
                            margin: '0 auto',
                            paddingBottom: '56.25%'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#ffffff'
                            }}>
                                <div style={{ textAlign: 'center' }} onClick={handleJoinLive}>
                                    <svg style={{
                                        width: '4rem',
                                        height: '4rem',
                                        margin: '0 auto 1rem',
                                        opacity: 0.5
                                    }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <p style={{ fontSize: '1.25rem' }}>Join Live</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module Info */}
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderTop: '1px solid #e5e7eb',
                        padding: '1.5rem'
                    }}>
                        <div style={{
                            maxWidth: '72rem',
                            margin: '0 auto'
                        }}>
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                marginBottom: '1rem'
                            }}>
                                Introduction to Fitness Training
                            </h2>
                            <p style={{
                                color: '#374151',
                                marginBottom: '1.5rem'
                            }}>
                                Learn the fundamental concepts of fitness training including proper form, safety guidelines, and how to structure an effective workout routine.
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                flexWrap: 'wrap'
                            }}>
                                <button style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: '#10b981',
                                    color: '#ffffff',
                                    borderRadius: '0.5rem',
                                    fontWeight: 600,
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}>
                                    <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Mark as Complete
                                </button>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{
                                        fontSize: '0.875rem',
                                        color: '#4b5563'
                                    }}>
                                        Resources:
                                    </span>
                                    <a
                                        href="#"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            color: '#2563eb',
                                            textDecoration: 'none',
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                        </svg>
                                        Workout Guide PDF
                                    </a>
                                    <a
                                        href="#"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            color: '#2563eb',
                                            textDecoration: 'none',
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                        </svg>
                                        Exercise Chart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}