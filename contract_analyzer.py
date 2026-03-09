def extract_parties(text):
    """
    Найти Заказчика и Исполнителя в тексте.
    
    Ищи строки вида:
    - "Заказчик: ООО "Компания""
    - "Исполнитель: ИП Иванов"
    - "Client: Company LLC"
    - "Contractor: John Doe"
    
    Возвращает: {"client": "...", "contractor": "..."}
    """
    pass

def extract_dates(text):
    """
    Найти все даты в форматах:
    - DD.MM.YYYY (01.12.2024)
    - YYYY-MM-DD (2024-12-01)
    
    Возвращает: список дат ["01.12.2024", "2024-12-01"]
    """
    pass

def extract_amounts(text):
    """
    Найти суммы вида:
    - 100 000 руб.
    - $5,000
    - €3.500
    - 2000 USD
    
    Возвращает: список словарей [{"amount": "100000", "currency": "RUB"}, ...]
    """
    pass

def find_risky_clauses(text):
    """
    Найти предложения содержащие:
    - "штраф", "неустойка", "пеня"
    - "penalty", "fine", "forfeit"
    
    Возвращает: список предложений с опасными клаузами
    """
    pass

def analyze_contract(filename):
    """
    Прочитать файл и извлечь всю информацию.
    
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
    """
    pass

def generate_report(contract_data, output_filename):
    """
    Сохранить данные анализа в JSON файл.
    """
    pass

def analyze_all_contracts(contracts_folder):
    """
    Найти все .txt файлы в папке.
    Проанализировать каждый.
    Сгенерировать отчёты в папку reports/.
    
    Возвращает: список всех отчётов
    """
    pass

def generate_summary(all_reports):
    """
    Создать сводку по всем договорам:
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
    """
    pass

def main():
    """Основная программа"""
    print("=== Contract Analyzer ===\n")
    
    # 1. Проанализировать все договоры
    contracts_folder = "contracts"
    reports = analyze_all_contracts(contracts_folder)
    
    print(f"Analyzed {len(reports)} contracts\n")
    
    # 2. Показать краткую информацию по каждому
    for report in reports:
        print(f"📄 {report['filename']}")
        print(f"   Parties: {report['parties']}")
        print(f"   Dates: {len(report['dates'])}")
        print(f"   Amounts: {len(report['amounts'])}")
        print(f"   ⚠️  Risky clauses: {len(report['risky_clauses'])}")
        print()
    
    # 3. Создать сводку
    summary = generate_summary(reports)
    
    # 4. Сохранить сводку
    generate_report(summary, "reports/summary.json")
    
    print("=== Summary ===")
    print(f"Total contracts: {summary['total_contracts']}")
    print(f"Contracts with risks: {summary['contracts_with_risks']}")
    print(f"Total risky clauses: {summary['total_risky_clauses']}")
    print(f"Most common currency: {summary['most_common_currency']}")
    
    print("\n✅ Analysis complete! Check reports/ folder.")

if __name__ == "__main__":
    main()