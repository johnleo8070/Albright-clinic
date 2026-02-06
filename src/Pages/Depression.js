import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RelatedArticles from "../Components/RelatedArticles";
import SEO from "../Components/SEO";
import depressionImage from "../Assets/depression-image.jpg";
import "../Styles/ArticleContent.css";

function Depression() {
    return (
        <div className="article-page">
            <SEO
                title="Understanding Depression | Albright Clinic"
                description="Learn about depression, major depressive disorder, symptoms, and effective treatment options. Professional mental health care in Richmond, TX."
                type="article"
            />
            <Navbar />

            <div className="article-section">
                <div className="article-header">
                    <h1 className="article-title">Understanding Depression</h1>
                    <p className="article-intro">
                        Depression is more than occasional sadness. It is a common but serious mental health disorder that affects
                        how a person feels, thinks, and handles daily activities. According to the World Health Organization, over
                        280 million people globally experience depression, making it a leading cause of disability worldwide.
                    </p>
                </div>

                <img src={depressionImage} alt="Understanding Depression" className="article-image" />

                <div className="article-content">
                    <div className="article-content-section">
                        <h2 className="section-title">What is Depression?</h2>
                        <p className="section-text">
                            Depression, also called major depressive disorder (MDD), is a mood disorder characterized by persistent
                            feelings of sadness, hopelessness, and a loss of interest or pleasure in activities once enjoyed. It
                            affects emotional, physical, and cognitive functioning, and its severity can range from mild to debilitating.
                        </p>

                        <h3 className="section-subtitle">Depression comes in different forms, including:</h3>
                        <ul className="article-list">
                            <li>
                                <strong>Major Depressive Disorder:</strong> Persistent symptoms lasting at least two weeks that
                                interfere with daily life.
                            </li>
                            <li>
                                <strong>Persistent Depressive Disorder (Dysthymia):</strong> Chronic, less severe depressive symptoms
                                lasting two years or more.
                            </li>
                            <li>
                                <strong>Seasonal Affective Disorder (SAD):</strong> Depression related to seasonal changes, often in winter.
                            </li>
                            <li>
                                <strong>Postpartum Depression:</strong> Occurs after childbirth, affecting mood and maternal bonding.
                            </li>
                            <li>
                                <strong>Bipolar Depression:</strong> Occurs as part of bipolar disorder, alternating with periods of
                                mania or hypomania.
                            </li>
                        </ul>
                    </div>



                    <div className="article-content-section">
                        <h2 className="section-title">Living with Depression</h2>
                        <p className="section-text">
                            Recovery from depression is possible, though it may involve ups and downs. Developing coping strategies,
                            following treatment plans, and having a supportive environment significantly improve outcomes. Early
                            intervention can prevent complications and reduce the risk of recurrence.
                        </p>
                    </div>

                    <div className="article-content-section">
                        <h2 className="section-title">When to Seek Help</h2>
                        <p className="section-text">
                            Immediate help is necessary if someone experiences suicidal thoughts, severe hopelessness, or inability
                            to function daily. Mental health professionals, therapists, and emergency services are critical resources.
                        </p>
                    </div>
                </div>

                <RelatedArticles currentArticleId="depression" />
            </div>

            <Footer />
        </div>
    );
}

export default Depression;
