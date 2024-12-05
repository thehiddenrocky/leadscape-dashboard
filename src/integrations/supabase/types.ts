export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      consumer_perceptions: {
        Row: {
          category: string
          created_at: string
          id: string
          improvement_areas: string[] | null
          positive_aspects: string[] | null
          provider: string
          satisfaction_score: number | null
          survey_date: string
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          improvement_areas?: string[] | null
          positive_aspects?: string[] | null
          provider: string
          satisfaction_score?: number | null
          survey_date?: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          improvement_areas?: string[] | null
          positive_aspects?: string[] | null
          provider?: string
          satisfaction_score?: number | null
          survey_date?: string
        }
        Relationships: []
      }
      customer_feedback_lounea: {
        Row: {
          additional_details: string | null
          category: string
          created_at: string
          id: string
          key_point: string
          reference_links: string | null
          subcategory: string
        }
        Insert: {
          additional_details?: string | null
          category: string
          created_at?: string
          id?: string
          key_point: string
          reference_links?: string | null
          subcategory: string
        }
        Update: {
          additional_details?: string | null
          category?: string
          created_at?: string
          id?: string
          key_point?: string
          reference_links?: string | null
          subcategory?: string
        }
        Relationships: []
      }
      customer_service_metrics: {
        Row: {
          avg_wait_time_minutes: number | null
          common_issues: string[] | null
          created_at: string
          id: string
          provider: string
          report_date: string
          resolution_time_hours: number | null
          satisfaction_score: number | null
          support_channels: string[] | null
        }
        Insert: {
          avg_wait_time_minutes?: number | null
          common_issues?: string[] | null
          created_at?: string
          id?: string
          provider: string
          report_date?: string
          resolution_time_hours?: number | null
          satisfaction_score?: number | null
          support_channels?: string[] | null
        }
        Update: {
          avg_wait_time_minutes?: number | null
          common_issues?: string[] | null
          created_at?: string
          id?: string
          provider?: string
          report_date?: string
          resolution_time_hours?: number | null
          satisfaction_score?: number | null
          support_channels?: string[] | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          company_logo: string
          company_name: string
          contact_avatar: string
          contact_name: string
          created_at: string
          id: string
          instances: number
          relevant_products: number
        }
        Insert: {
          company_logo: string
          company_name: string
          contact_avatar: string
          contact_name: string
          created_at?: string
          id?: string
          instances: number
          relevant_products: number
        }
        Update: {
          company_logo?: string
          company_name?: string
          contact_avatar?: string
          contact_name?: string
          created_at?: string
          id?: string
          instances?: number
          relevant_products?: number
        }
        Relationships: []
      }
      market_analysis: {
        Row: {
          affected_segment: string
          category: string
          created_at: string
          current_status: string
          data_date: string
          factor: string
          geographic_scope: string
          id: string
          impact_level: string
          market_effect: string
          time_period: string
          trend: string
        }
        Insert: {
          affected_segment: string
          category: string
          created_at?: string
          current_status: string
          data_date: string
          factor: string
          geographic_scope: string
          id?: string
          impact_level: string
          market_effect: string
          time_period: string
          trend: string
        }
        Update: {
          affected_segment?: string
          category?: string
          created_at?: string
          current_status?: string
          data_date?: string
          factor?: string
          geographic_scope?: string
          id?: string
          impact_level?: string
          market_effect?: string
          time_period?: string
          trend?: string
        }
        Relationships: []
      }
      network_performance_metrics: {
        Row: {
          average_download_speed: string
          coverage_description: string
          created_at: string
          id: string
          network_reliability: number
          provider: string
        }
        Insert: {
          average_download_speed: string
          coverage_description: string
          created_at?: string
          id?: string
          network_reliability: number
          provider: string
        }
        Update: {
          average_download_speed?: string
          coverage_description?: string
          created_at?: string
          id?: string
          network_reliability?: number
          provider?: string
        }
        Relationships: []
      }
      price_influence_factors: {
        Row: {
          consumer_benefit: string
          created_at: string
          data_date: string
          factor: string
          factor_type: string
          id: string
          primary_impact: string
          provider_response: string
          rural_effect: string
          secondary_impact: string
          time_frame: string
          urban_effect: string
        }
        Insert: {
          consumer_benefit: string
          created_at?: string
          data_date: string
          factor: string
          factor_type: string
          id?: string
          primary_impact: string
          provider_response: string
          rural_effect: string
          secondary_impact: string
          time_frame: string
          urban_effect: string
        }
        Update: {
          consumer_benefit?: string
          created_at?: string
          data_date?: string
          factor?: string
          factor_type?: string
          id?: string
          primary_impact?: string
          provider_response?: string
          rural_effect?: string
          secondary_impact?: string
          time_frame?: string
          urban_effect?: string
        }
        Relationships: []
      }
      service_pricing: {
        Row: {
          created_at: string
          data_date: string
          entertainment_package: string | null
          hardware_model: string | null
          id: string
          location_type: string
          monthly_price_eur: number
          package_type: string
          provider: string
          service_type: string
          speed_mbps: number | null
          target_market: string
          technology: string
        }
        Insert: {
          created_at?: string
          data_date: string
          entertainment_package?: string | null
          hardware_model?: string | null
          id?: string
          location_type: string
          monthly_price_eur: number
          package_type: string
          provider: string
          service_type: string
          speed_mbps?: number | null
          target_market: string
          technology: string
        }
        Update: {
          created_at?: string
          data_date?: string
          entertainment_package?: string | null
          hardware_model?: string | null
          id?: string
          location_type?: string
          monthly_price_eur?: number
          package_type?: string
          provider?: string
          service_type?: string
          speed_mbps?: number | null
          target_market?: string
          technology?: string
        }
        Relationships: []
      }
      service_quality_metrics: {
        Row: {
          connection_stability_percent: number | null
          created_at: string
          download_speed_mbps: number | null
          id: string
          infrastructure_type: string | null
          latency_ms: number | null
          location_type: string | null
          measurement_date: string
          measurement_tool: string | null
          network_coverage_percent: number | null
          provider: string
          upload_speed_mbps: number | null
        }
        Insert: {
          connection_stability_percent?: number | null
          created_at?: string
          download_speed_mbps?: number | null
          id?: string
          infrastructure_type?: string | null
          latency_ms?: number | null
          location_type?: string | null
          measurement_date?: string
          measurement_tool?: string | null
          network_coverage_percent?: number | null
          provider: string
          upload_speed_mbps?: number | null
        }
        Update: {
          connection_stability_percent?: number | null
          created_at?: string
          download_speed_mbps?: number | null
          id?: string
          infrastructure_type?: string | null
          latency_ms?: number | null
          location_type?: string | null
          measurement_date?: string
          measurement_tool?: string | null
          network_coverage_percent?: number | null
          provider?: string
          upload_speed_mbps?: number | null
        }
        Relationships: []
      }
      telecom_common_issues: {
        Row: {
          created_at: string
          frequency: string
          id: string
          impact_level: string
          issue_type: string
          provider: string
          resolution_time_hours: number
        }
        Insert: {
          created_at?: string
          frequency: string
          id?: string
          impact_level: string
          issue_type: string
          provider: string
          resolution_time_hours: number
        }
        Update: {
          created_at?: string
          frequency?: string
          id?: string
          impact_level?: string
          issue_type?: string
          provider?: string
          resolution_time_hours?: number
        }
        Relationships: []
      }
      telecom_industry_analysis: {
        Row: {
          annual_investment: number | null
          avg_wait_time: number | null
          bundled_offerings: boolean | null
          compliance_status: boolean | null
          coverage_description: string
          created_at: string
          customer_service_rating: number | null
          download_speed: string
          fixed_broadband: boolean | null
          focus_area: string | null
          has_chat_support: boolean | null
          has_email_support: boolean | null
          has_local_centers: boolean | null
          has_phone_support: boolean | null
          has_self_service: boolean | null
          has_social_media: boolean | null
          id: string
          innovative_services: string | null
          last_audit_date: string | null
          mobile_broadband: boolean | null
          network_performance: number | null
          network_reliability: number
          non_compliance_issues: boolean | null
          off_peak_wait: number | null
          overall_satisfaction: number | null
          peak_hours_wait: number | null
          price_value: number | null
          provider: string
          rural_coverage: number | null
          service_channels: string[] | null
          suburban_coverage: number | null
          urban_coverage: number | null
        }
        Insert: {
          annual_investment?: number | null
          avg_wait_time?: number | null
          bundled_offerings?: boolean | null
          compliance_status?: boolean | null
          coverage_description: string
          created_at?: string
          customer_service_rating?: number | null
          download_speed: string
          fixed_broadband?: boolean | null
          focus_area?: string | null
          has_chat_support?: boolean | null
          has_email_support?: boolean | null
          has_local_centers?: boolean | null
          has_phone_support?: boolean | null
          has_self_service?: boolean | null
          has_social_media?: boolean | null
          id?: string
          innovative_services?: string | null
          last_audit_date?: string | null
          mobile_broadband?: boolean | null
          network_performance?: number | null
          network_reliability: number
          non_compliance_issues?: boolean | null
          off_peak_wait?: number | null
          overall_satisfaction?: number | null
          peak_hours_wait?: number | null
          price_value?: number | null
          provider: string
          rural_coverage?: number | null
          service_channels?: string[] | null
          suburban_coverage?: number | null
          urban_coverage?: number | null
        }
        Update: {
          annual_investment?: number | null
          avg_wait_time?: number | null
          bundled_offerings?: boolean | null
          compliance_status?: boolean | null
          coverage_description?: string
          created_at?: string
          customer_service_rating?: number | null
          download_speed?: string
          fixed_broadband?: boolean | null
          focus_area?: string | null
          has_chat_support?: boolean | null
          has_email_support?: boolean | null
          has_local_centers?: boolean | null
          has_phone_support?: boolean | null
          has_self_service?: boolean | null
          has_social_media?: boolean | null
          id?: string
          innovative_services?: string | null
          last_audit_date?: string | null
          mobile_broadband?: boolean | null
          network_performance?: number | null
          network_reliability?: number
          non_compliance_issues?: boolean | null
          off_peak_wait?: number | null
          overall_satisfaction?: number | null
          peak_hours_wait?: number | null
          price_value?: number | null
          provider?: string
          rural_coverage?: number | null
          service_channels?: string[] | null
          suburban_coverage?: number | null
          urban_coverage?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
