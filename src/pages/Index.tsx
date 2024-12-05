import Layout from "@/components/dashboard/Layout";
import AlertBanner from "@/components/dashboard/AlertBanner";
import StatsCard from "@/components/dashboard/StatsCard";
import LeadsTable from "@/components/dashboard/LeadsTable";

const Index = () => {
  return (
    <Layout>
      <AlertBanner 
        title="Alert: 5 New B2C fintech companies are investing in decentralized cloud solutions"
        message="New opportunities detected in your target market"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatsCard
          title="Activity Increase"
          value="36%"
          trend={36}
          description="Increase in Relevant Activity Compared To Last Week"
        />
        <StatsCard
          title="Active Accounts"
          value="14%"
          trend={-2}
          description="16 Of Your 108 Accounts Had Relevant Activity This Week"
        />
      </div>

      <LeadsTable />
    </Layout>
  );
};

export default Index;