import { AuthEffects } from './auth.effects';
import { ExpenseEffects } from './expense.effects';
import { IncomeEffects } from './income.effects';
import { ProfileEffects } from './profile.effects';
import { CategoryEffects } from './category.effects';

export const appEffects = [
    AuthEffects,
    CategoryEffects,
    ExpenseEffects,
    IncomeEffects,
    ProfileEffects
];
