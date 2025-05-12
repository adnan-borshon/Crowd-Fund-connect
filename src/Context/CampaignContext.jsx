import { createContext, useContext, useEffect, useState } from "react";

const CampaignContext = createContext({
    campaigns: [],
    loading: false,
});

export const CampaignProvider = ({ children }) => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        const fetchCampaigns =  async()=>{
            try {
                setLoading(true);
                const response = await fetch("/API/campaigns.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setCampaigns(data);
            } catch (error) {
                console.error("Error fetching campaigns:", error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchCampaigns();
    },[]);

    return (
        <CampaignContext.Provider value={{ campaigns, loading }}>
            {children}
        </CampaignContext.Provider>
    );

}

export const useCampaigns = () => useContext(CampaignContext)