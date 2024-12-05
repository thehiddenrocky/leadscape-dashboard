import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { supabase } from "@/integrations/supabase/client";

const fetchBroadbandPackages = async () => {
  const { data, error } = await supabase
    .from('broadband_packages')
    .select('*')
    .order('provider', { ascending: true });

  if (error) throw error;
  return data;
};

const fetchMobilePlans = async () => {
  const { data, error } = await supabase
    .from('mobile_plans')
    .select('*')
    .order('provider', { ascending: true });

  if (error) throw error;
  return data;
};

const fetchBundledOffers = async () => {
  const { data, error } = await supabase
    .from('bundled_offers')
    .select('*')
    .order('provider', { ascending: true });

  if (error) throw error;
  return data;
};

const fetchMarketingCampaigns = async () => {
  const { data, error } = await supabase
    .from('marketing_campaigns')
    .select('*')
    .order('company', { ascending: true });

  if (error) throw error;
  return data;
};

const fetchCreativeHighlights = async () => {
  const { data, error } = await supabase
    .from('creative_highlights')
    .select('*')
    .order('company', { ascending: true });

  if (error) throw error;
  return data;
};

const fetchComparativeAnalysis = async () => {
  const { data, error } = await supabase
    .from('comparative_analysis')
    .select('*')
    .order('company', { ascending: true });

  if (error) throw error;
  return data;
};

const fetchEmergingTrends = async () => {
  const { data, error } = await supabase
    .from('emerging_trends')
    .select('*')
    .order('trend', { ascending: true });

  if (error) throw error;
  return data;
};

const ComprehensivePricingView = () => {
  const { data: broadbandPackages, isLoading: isLoadingBroadband } = useQuery({
    queryKey: ['broadband-packages'],
    queryFn: fetchBroadbandPackages,
  });

  const { data: mobilePlans, isLoading: isLoadingMobile } = useQuery({
    queryKey: ['mobile-plans'],
    queryFn: fetchMobilePlans,
  });

  const { data: bundledOffers, isLoading: isLoadingBundles } = useQuery({
    queryKey: ['bundled-offers'],
    queryFn: fetchBundledOffers,
  });

  const { data: marketingCampaigns, isLoading: isLoadingCampaigns } = useQuery({
    queryKey: ['marketing-campaigns'],
    queryFn: fetchMarketingCampaigns,
  });

  const { data: creativeHighlights, isLoading: isLoadingHighlights } = useQuery({
    queryKey: ['creative-highlights'],
    queryFn: fetchCreativeHighlights,
  });

  const { data: comparativeAnalysis, isLoading: isLoadingAnalysis } = useQuery({
    queryKey: ['comparative-analysis'],
    queryFn: fetchComparativeAnalysis,
  });

  const { data: emergingTrends, isLoading: isLoadingTrends } = useQuery({
    queryKey: ['emerging-trends'],
    queryFn: fetchEmergingTrends,
  });

  if (isLoadingBroadband || isLoadingMobile || isLoadingBundles || 
      isLoadingCampaigns || isLoadingHighlights || isLoadingAnalysis || 
      isLoadingTrends) {
    return <div className="text-white">Loading pricing data...</div>;
  }

  return (
    <div className="space-y-6">
      <Card className="bg-dashboard-card border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Comprehensive Pricing Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-4">
            {/* Keep existing accordion items */}
            <AccordionItem value="broadband" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-white/90">Broadband Packages</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-900">
                        <TableHead className="text-gray-400">Provider</TableHead>
                        <TableHead className="text-gray-400">Plan Name</TableHead>
                        <TableHead className="text-gray-400">Download Speed</TableHead>
                        <TableHead className="text-gray-400">Technology</TableHead>
                        <TableHead className="text-gray-400">Monthly Price</TableHead>
                        <TableHead className="text-gray-400">Contract Length</TableHead>
                        <TableHead className="text-gray-400">Additional Fees</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {broadbandPackages?.map((pkg) => (
                        <TableRow key={pkg.id} className="hover:bg-gray-900/50">
                          <TableCell className="text-white">{pkg.provider}</TableCell>
                          <TableCell className="text-white">{pkg.plan_name}</TableCell>
                          <TableCell className="text-white">{pkg.download_speed}</TableCell>
                          <TableCell className="text-white">{pkg.technology}</TableCell>
                          <TableCell className="text-white">€{pkg.monthly_price}</TableCell>
                          <TableCell className="text-white">{pkg.contract_length}</TableCell>
                          <TableCell className="text-white">{pkg.additional_fees}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mobile" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-white/90">Mobile Plans</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-900">
                        <TableHead className="text-gray-400">Provider</TableHead>
                        <TableHead className="text-gray-400">Plan Name</TableHead>
                        <TableHead className="text-gray-400">Data Allowance</TableHead>
                        <TableHead className="text-gray-400">Calls & Texts</TableHead>
                        <TableHead className="text-gray-400">Monthly Price</TableHead>
                        <TableHead className="text-gray-400">Contract Terms</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mobilePlans?.map((plan) => (
                        <TableRow key={plan.id} className="hover:bg-gray-900/50">
                          <TableCell className="text-white">{plan.provider}</TableCell>
                          <TableCell className="text-white">{plan.plan_name}</TableCell>
                          <TableCell className="text-white">{plan.data_allowance}</TableCell>
                          <TableCell className="text-white">{plan.calls_texts}</TableCell>
                          <TableCell className="text-white">€{plan.monthly_price}</TableCell>
                          <TableCell className="text-white">{plan.contract_terms}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bundles" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-white/90">Bundled Offers</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-900">
                        <TableHead className="text-gray-400">Provider</TableHead>
                        <TableHead className="text-gray-400">Bundle Components</TableHead>
                        <TableHead className="text-gray-400">Total Price</TableHead>
                        <TableHead className="text-gray-400">Notes</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bundledOffers?.map((bundle) => (
                        <TableRow key={bundle.id} className="hover:bg-gray-900/50">
                          <TableCell className="text-white">{bundle.provider}</TableCell>
                          <TableCell className="text-white">{bundle.bundle_components.join(', ')}</TableCell>
                          <TableCell className="text-white">€{bundle.total_price}</TableCell>
                          <TableCell className="text-white">{bundle.notes}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* New accordion items for marketing and campaign analysis */}
            <AccordionItem value="campaigns" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-white/90">Campaigns and Messaging</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-900">
                        <TableHead className="text-gray-400">Company</TableHead>
                        <TableHead className="text-gray-400">Campaign Focus</TableHead>
                        <TableHead className="text-gray-400">Launch Date</TableHead>
                        <TableHead className="text-gray-400">Status</TableHead>
                        <TableHead className="text-gray-400">Messaging</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {marketingCampaigns?.map((campaign) => (
                        <TableRow key={campaign.id} className="hover:bg-gray-900/50">
                          <TableCell className="text-white">{campaign.company}</TableCell>
                          <TableCell className="text-white">{campaign.campaign_focus}</TableCell>
                          <TableCell className="text-white">{campaign.launch_date}</TableCell>
                          <TableCell className="text-white">{campaign.status}</TableCell>
                          <TableCell className="text-white">{campaign.messaging}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="creative" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-white/90">Creative Highlights and PR Events</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-900">
                        <TableHead className="text-gray-400">Company</TableHead>
                        <TableHead className="text-gray-400">Creative Focus</TableHead>
                        <TableHead className="text-gray-400">PR Event</TableHead>
                        <TableHead className="text-gray-400">Target Audience</TableHead>
                        <TableHead className="text-gray-400">Media Coverage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {creativeHighlights?.map((highlight) => (
                        <TableRow key={highlight.id} className="hover:bg-gray-900/50">
                          <TableCell className="text-white">{highlight.company}</TableCell>
                          <TableCell className="text-white">{highlight.creative_focus}</TableCell>
                          <TableCell className="text-white">{highlight.pr_event}</TableCell>
                          <TableCell className="text-white">{highlight.target_audience}</TableCell>
                          <TableCell className="text-white">{highlight.media_coverage}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="analysis" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-white/90">Comparative Analysis</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-900">
                        <TableHead className="text-gray-400">Company</TableHead>
                        <TableHead className="text-gray-400">Visibility and Reach</TableHead>
                        <TableHead className="text-gray-400">Strengths</TableHead>
                        <TableHead className="text-gray-400">Weaknesses</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comparativeAnalysis?.map((analysis) => (
                        <TableRow key={analysis.id} className="hover:bg-gray-900/50">
                          <TableCell className="text-white">{analysis.company}</TableCell>
                          <TableCell className="text-white">{analysis.visibility_reach}</TableCell>
                          <TableCell className="text-white">{analysis.strengths}</TableCell>
                          <TableCell className="text-white">{analysis.weaknesses}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="trends" className="border-gray-800">
              <AccordionTrigger className="text-white hover:text-white/90">Emerging Trends</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-900">
                        <TableHead className="text-gray-400">Trend</TableHead>
                        <TableHead className="text-gray-400">Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {emergingTrends?.map((trend) => (
                        <TableRow key={trend.id} className="hover:bg-gray-900/50">
                          <TableCell className="text-white">{trend.trend}</TableCell>
                          <TableCell className="text-white">{trend.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensivePricingView;
