export interface StepItem {
  id: number;
  title: string;
  shortTitle: string;
  badge: string;
  duration: string;
  summary: string;
  detailedSteps: string[];
  tips?: string[];
  warnings?: string[];
  mockupType: 'claude_login' | 'telegram_chat' | 'payment_link' | 'claude_menu' | 'plan_selection' | 'card_form' | 'card_decline' | 'account_hold' | 'success_dashboard';
  imageUrl?: string;
  checklist: string[];
}

export interface TroubleshootingItem {
  id: string;
  title: string;
  symptom: string;
  cause: string;
  solutionSteps: string[];
  templateText?: string;
  severity: 'low' | 'medium' | 'high';
  category: 'payment' | 'account' | 'vpn';
}

export interface PostPurchaseWorkflow {
  id: string;
  title: string;
  category: 'projects' | 'coding' | 'writing' | 'analysis' | 'prompts';
  categoryLabel: string;
  iconName: string;
  description: string;
  keyBenefits: string[];
  promptTemplate: string;
  proTip: string;
}

export interface SafetyCheck {
  id: string;
  label: string;
  description: string;
  isMandatory: boolean;
}
