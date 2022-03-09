package uk.hybridit.cakemanager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import uk.hybridit.cakemanager.uk.waracle.cakemanager.entity.Cake;
import uk.hybridit.cakemanager.uk.waracle.client.CakaManagerDBClient;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
public class CakaManagerResource {

        @Autowired
        private CakaManagerDBClient cakaManagerDBClient;

        @GetMapping("/cakes")
        public List<Cake> retrieveAllCakes(){ return cakaManagerDBClient.getCakes(); }

        @PostMapping("/cakes")
        public ResponseEntity<Object> createCake(@Valid @RequestBody Cake cake){
                Cake savedCake = cakaManagerDBClient.saveCake( cake );

                URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("{/{id}}")
                        .buildAndExpand(savedCake.getId()).toUri();

                return ResponseEntity.created( location ).build();
        }

        @GetMapping("/cake/{id}")
        public Cake getCake(@PathVariable Long id){
                Cake cake = cakaManagerDBClient.getCakeById(id);
                if(cake == null)
                        throw new CakeNotFoundException("id-" + id);

                return cake;
        }


}
