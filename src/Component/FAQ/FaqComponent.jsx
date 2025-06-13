import React from 'react';
import { motion } from 'framer-motion';

const FaqComponent = () => {
    return (
        <motion.div
            initial={{ opacity:0 ,translateX:'-100%'}}
                whileInView={{opacity:1,translateX:0}}i
                transition={{ duration: 1 }}
        >
            <div className="join join-vertical bg-base-100">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title font-semibold">How do I create an account?</div>
                    <div className="collapse-content text-sm">Click the "Sign Up/Login" button in the top right corner and follow the registration process.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">How do I add books to my personal bookshelf?</div>
                    <div className="collapse-content text-sm">Simply browse the  “Add Book Page” From Navbar. You’ll need to be logged in to save books to your shelf.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Can I leave reviews or ratings for books?</div>
                    <div className="collapse-content text-sm">Click on "View Details" button on you went to review book card. then you can review the book</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Is there a limit to how many books I can keep on my bookshelf?</div>
                    <div className="collapse-content text-sm">No, there’s no limit! You can add as many books as you'd like to your personal shelf for easy access anytime.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">How do I update my reading progress?</div>
                    <div className="collapse-content text-sm">Yes, you can update your reading progress form "Update page" and also from bookdetail page.</div>
                </div>
            </div>
        </motion.div>
    );
};

export default FaqComponent;