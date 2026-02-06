import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faCloudRain,
    faHeartPulse,
    faBolt,
    faShieldHeart,
    faFaceSmile
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/ArticleContent.css";

// All mental health articles data
const allArticles = [
    {
        id: "bipolar",
        title: "Bipolar Disorder",
        path: "/conditions/bipolar",
        description: "Understanding extreme mood swings from emotional highs (mania) to lows (depression) and how to manage them effectively.",
        icon: faChartLine
    },
    {
        id: "depression",
        title: "Depression",
        path: "/conditions/depression",
        description: "Learn about major depressive disorder, its symptoms, and effective treatment options for recovery.",
        icon: faCloudRain
    },
    {
        id: "anxiety",
        title: "Anxiety Disorder",
        path: "/conditions/anxiety",
        description: "Discover how to manage excessive fear, worry, and nervousness that interfere with daily life.",
        icon: faHeartPulse
    },
    {
        id: "adhd",
        title: "ADHD",
        path: "/conditions/adhd",
        description: "Understanding attention difficulties, hyperactivity, and impulsivity with proper strategies and support.",
        icon: faBolt
    },
    {
        id: "ptsd",
        title: "PTSD & Trauma-Related Disorders",
        path: "/conditions/ptsd",
        description: "Support for those experiencing symptoms after traumatic events and effective recovery strategies.",
        icon: faShieldHeart
    },
    {
        id: "mood-disorders",
        title: "Mood Disorders",
        path: "/conditions/mood-disorders",
        description: "Understanding significant disturbances in emotional state and how they affect daily functioning.",
        icon: faFaceSmile
    }
];

function RelatedArticles({ currentArticleId }) {
    // Filter out the current article
    const relatedArticles = allArticles.filter(article => article.id !== currentArticleId);

    return (
        <div className="related-articles-section">
            <h2 className="related-articles-title">Other Mental Health Conditions</h2>
            <div className="related-articles-list">
                {relatedArticles.map((article) => (
                    <Link
                        key={article.id}
                        to={article.path}
                        className="related-article-card"
                    >
                        <div className="related-article-thumbnail">
                            <FontAwesomeIcon icon={article.icon} className="related-article-icon" />
                        </div>
                        <div className="related-article-content">
                            <h3 className="related-article-title">{article.title}</h3>
                            <p className="related-article-description">{article.description}</p>
                            <span className="related-article-link">
                                Read more →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RelatedArticles;
