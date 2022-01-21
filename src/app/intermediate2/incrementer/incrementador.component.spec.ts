import { TestBed, ComponentFixture, async, waitForAsync } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('should be displayed leyend', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('Progreso de carga');
    });

    xit('Mostrar en input valor del progreso', waitForAsync(() => {
 
        component.cambiarValor(5);
        fixture.detectChanges();
 
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const elm: HTMLInputElement = input.nativeElement;
 
            console.log(elm);
 
            expect(elm.value).toBe('55');
        })
 
    }));

    it('should be increment/decrement 5, when clicked button', () => {
      
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        
        botones[0].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(50);
    });
    
    it('should be displayed in title the progress', () => {
      
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('45');
    });
    
});
