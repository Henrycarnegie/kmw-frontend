"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Button from './Button';

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
}

const EmptyState = ({ icon: Icon, title, description, actionLabel, onAction }: EmptyStateProps) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center space-y-4 bg-gray-50 rounded-4xl border-2 border-dashed border-gray-200"
        >
            <div className="bg-white size-16 rounded-full flex items-center justify-center mx-auto shadow-sm border border-gray-100">
                <Icon className="size-8 text-gray-300" />
            </div>
            <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-gray-500 max-w-xs mx-auto">{description}</p>
            </div>
            {actionLabel && onAction && (
                <Button 
                    variant="outline" 
                    className="w-auto px-8 mx-auto mt-4"
                    onClick={onAction}
                >
                    {actionLabel}
                </Button>
            )}
        </motion.div>
    );
};

export default EmptyState;
