'use strict';

/**
 * Найти Заказчика и Исполнителя в тексте.
    
    Ищи строки вида:
    - "Заказчик: ООО "Компания""
    - "Исполнитель: ИП Иванов"
    - "Client: Company LLC"
    - "Contractor: John Doe"
    
    Возвращает: {"client": "...", "contractor": "..."}
 * @param {*} text 
 */
function extractParties(text) {

}

/**
 * Найти все даты в форматах:
    - DD.MM.YYYY (01.12.2024)
    - YYYY-MM-DD (2024-12-01)
    
    Возвращает: список дат ["01.12.2024", "2024-12-01"]
 * @param {*} text 
 */
function extractDates(text) {

}
/**
 * Найти суммы вида:
    - 100 000 руб.
    - $5,000
    - €3.500
    - 2000 USD
    
    Возвращает: список словарей [{"amount": "100000", "currency": "RUB"}, ...]
 * @param {*} text 
 */
function extractAmounts(text) {

}

/**
 * Найти предложения содержащие:
    - "штраф", "неустойка", "пеня"
    - "penalty", "fine", "forfeit"
    
    Возвращает: список предложений с опасными клаузами
 * @param {*} text 
 */
function findRiskyClauses(text) {

}

/**
 * Прочитать файл и извлечь всю информацию.
    
    Возвращает словарь:
    {
        "filename": "contract_1.txt",
        "parties": {"client": "...", "contractor": "..."},
        "dates": ["...", "..."],
        "amounts": [{"amount": "...", "currency": "..."}, ...],
        "risky_clauses": ["...", "..."],
        "word_count": 150,
        "char_count": 800
    }
 * @param {*} filename 
 */
function analyzeContract(filename) {

}

/**
 * Сохранить данные анализа в JSON файл.
 * @param {*} contractData 
 * @param {*} outputFilename 
 */
function generateReport(contractData, outputFilename) {

}

/**
 * Найти все .txt файлы в папке.
    Проанализировать каждый.
    Сгенерировать отчёты в папку reports/.
    
    Возвращает: список всех отчётов
 * @param {*} contractFolder 
 */
function analyzeAllContracts(contractFolder) {

}

/**
 * Создать сводку по всем договорам:
    {
        "total_contracts": 3,
        "total_risky_clauses": 5,
        "average_word_count": 200,
        "contracts_with_risks": 2,
        "most_common_currency": "RUB",
        "total_amount_by_currency": {
            "RUB": 150000,
            "USD": 5000
        }
    }
 * @param {*} allReports 
 */
function generateSummary(allReports) {

}

function main() {
  console.log("=== Contract Analyzer ===\n");

  // 1. Проанализировать все договоры
  const contractFolder = "contracts";
  const reports = analyzeAllContracts(contractFolder);

  console.log(`Analyzed ${reports.length} contracts\n`);

  // 2. Показать краткую информацию по каждому
  for (const report in reports) {
    console.log(`📄 ${report['filename']}`);
    console.log(`   Parties: ${report['parties']}`);
    console.log(`   Dates: ${len(report['dates'])}`);
    console.log(`   Amounts: ${len(report['amounts'])}`);
    console.log(`  ⚠️  Risky clauses: ${len(report['risky_clauses'])}`);
    console.log();

    // 3. Создать сводку
    const summary = generateSummary(reports);

    // 4. Сохранить сводку
    generateReport(summary, "reports/summary.json");

    console.log("=== Summary ===");
    console.log(`Total contracts: ${summary['total_contracts']}`);
    console.log(`Contracts with risks: ${summary['contracts_with_risks']}`);
    console.log(`Total risky clauses: ${summary['total_risky_clauses']}`);
    console.log(`Most common currency: ${summary['most_common_currency']}`);

    console.log("\n✅ Analysis complete! Check reports/ folder.");
  }
}

main();