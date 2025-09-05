// Barrel file：聚合并导出所有项目；顺便做轻量校验

import SARS from "./SARS";
import CARES from "./CARES";
import CPS from "./CPS";
import ETFDataAnalysis from "./ETFDataAnalysis";
import ModernRegressionAnalysis from "./ModernRegressionAnalysis";
import QuadraticDiscriminantAnalysis from "./QuadraticDiscriminantAnalysis";
import CustomerChurnAnalysis from "./CustomerChurnAnalysis";
import TradingStrategyBacktestingStatisticalValidation from "./TradingStrategyBacktestingStatisticalValidation";
import GlucoseToleranceTestDataAnalysis from "./GlucoseToleranceTestDataAnalysis";
import ModelValidationFamaFrench3FactorsModel from "./ModelValidationFamaFrench3FactorsModel";
import LeetCodeAchievements from "./LeetCodeAchievements";

// 继续在这里 import 其它项目…

/**
 * “Contract”：JSDoc 类型声明
 * 1) 编辑器可智能提示
 * 2) 项目文件可用 `/** @type {import('./index').Project} *\/` 获得类型约束
 */
export /**
 * @typedef {Object} ProjectMeta
 * @property {string} role
 * @property {string} stack
 * @property {string} duration
 * @property {string} tools
 * @property {string} pdfFile
 * @property {{ text: string, href: string }[]=} links
 *
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} kicker
 * @property {string=} cover
 * @property {string=} hero
 * @property {string[]} tags
 * @property {ProjectMeta} meta
 * @property {string[]} desc
 * @property {string[]} gallery
 */

/**
 * 轻量运行期校验（开发环境下给出 console.warn）
 * 避免引入第三方库（如 zod / yup）
 * @param {Project[]} list
 */
function validateProjects(list) {
  if (process.env.NODE_ENV === "production") return list;

  const requiredRoot = ["slug","title","kicker","tags","meta","desc","gallery"];
  const requiredMeta = ["role","stack","duration","tools"];

  list.forEach((p, idx) => {
    const missRoot = requiredRoot.filter(k => p[k] == null);
    if (missRoot.length) {
      // eslint-disable-next-line no-console
      console.warn(`[projects] #${idx}(${p.slug||"?"}) 缺少字段:`, missRoot);
    }
    if (p.meta) {
      const missMeta = requiredMeta.filter(k => p.meta[k] == null);
      if (missMeta.length) {
        // eslint-disable-next-line no-console
        console.warn(`[projects] #${idx}(${p.slug||"?"}) meta 缺少字段:`, missMeta);
      }
    }
    if (!Array.isArray(p.tags)) {
      // eslint-disable-next-line no-console
      console.warn(`[projects] ${p.slug}: tags 应为 string[]`);
    }
    if (!Array.isArray(p.desc)) {
      // eslint-disable-next-line no-console
      console.warn(`[projects] ${p.slug}: desc 应为 string[]`);
    }
    if (!Array.isArray(p.gallery)) {
      // eslint-disable-next-line no-console
      console.warn(`[projects] ${p.slug}: gallery 应为 string[]`);
    }
  });

  return list;
}

export const projects = validateProjects([
  ModelValidationFamaFrench3FactorsModel,
  QuadraticDiscriminantAnalysis,  
  ETFDataAnalysis,
  TradingStrategyBacktestingStatisticalValidation,
  GlucoseToleranceTestDataAnalysis,
  ModernRegressionAnalysis,
  CustomerChurnAnalysis,
  CPS,
  CARES,
  SARS,
  LeetCodeAchievements,
  // …把新项目加在这里
]);
