package dev.davidsilva.music.album;

import com.fasterxml.jackson.annotation.JsonInclude;
import dev.davidsilva.music.song.SongDto;
import lombok.Data;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_DEFAULT)
@Data
public class AlbumDto {
    private int id;

    private String albumArtist;

    private String album;

    private List<String> genres;

    private int year;

    private List<SongDto> songs;
}
