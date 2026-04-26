"use client";

import { useState, useMemo } from 'react';

interface FilterConfig<T> {
    items: T[];
    searchFields: (keyof T)[];
    categoryField?: keyof T;
    defaultCategory?: string;
    categoryRules?: Record<string, (item: T) => boolean>;
}

export function useFilter<T>({ 
    items, 
    searchFields, 
    categoryField, 
    defaultCategory = "All",
    categoryRules 
}: FilterConfig<T>) {
    const [activeTab, setActiveTab] = useState(defaultCategory);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredItems = useMemo(() => {
        return items.filter(item => {
            // Category filtering
            let matchesTab = true;
            if (categoryRules && activeTab !== "All") {
                const rule = categoryRules[activeTab];
                if (rule) {
                    matchesTab = rule(item);
                }
            } else if (categoryField && activeTab !== "All") {
                matchesTab = String(item[categoryField]) === activeTab;
            }
            
            // Search filtering
            const matchesSearch = searchQuery === "" || searchFields.some(field => {
                const value = item[field];
                return typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase());
            });

            return matchesTab && matchesSearch;
        });
    }, [items, activeTab, searchQuery, searchFields, categoryField, categoryRules]);

    const clearFilters = () => {
        setActiveTab(defaultCategory);
        setSearchQuery("");
    };

    return {
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        filteredItems,
        clearFilters
    };
}
